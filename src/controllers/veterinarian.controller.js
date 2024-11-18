const Veterinarian = require('./veterinarian.model');
const Consultation = require('../consultation/consultation.model'); 

exports.getStatistics = async (req, res) => {
  try {
    const totalVets = await Veterinarian.countDocuments();
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const consultationsToday = await Consultation.countDocuments({
      date: {
        $gte: today,
        $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
      }
    });
    
    const vets = await Veterinarian.find({}, 'rating');
    const averageRating = vets.reduce((acc, curr) => acc + curr.rating, 0) / vets.length;
    
    res.json({
      totalVeterinarians: totalVets,
      consultationsToday,
      averageRating: averageRating.toFixed(1)
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estatísticas' });
  }
};

exports.getAllVeterinarians = async (req, res) => {
  try {
    const veterinarians = await Veterinarian.aggregate([
      {
        $lookup: {
          from: 'consultations',
          let: { vetId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$veterinarianId', '$$vetId'] },
                    { $gte: ['$date', new Date()] }
                  ]
                }
              }
            },
            { $sort: { date: 1 } },
            { $limit: 1 }
          ],
          as: 'nextConsultation'
        }
      }
    ]);
    
    res.json(veterinarians);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar veterinários' });
  }
};

exports.createVeterinarian = async (req, res) => {
  try {
    const newVet = new Veterinarian(req.body);
    await newVet.save();
    res.status(201).json(newVet);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar veterinário' });
  }
};

exports.updateVeterinarian = async (req, res) => {
  try {
    const updatedVet = await Veterinarian.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVet) {
      return res.status(404).json({ error: 'Veterinário não encontrado' });
    }
    res.json(updatedVet);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar veterinário' });
  }
};

exports.deleteVeterinarian = async (req, res) => {
  try {
    const deletedVet = await Veterinarian.findByIdAndDelete(req.params.id);
    if (!deletedVet) {
      return res.status(404).json({ error: 'Veterinário não encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar veterinário' });
  }
};