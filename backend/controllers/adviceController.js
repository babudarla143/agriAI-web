// controllers/adviceController.js

exports.getAdvice = (req, res) => {
  const { crop, stage, location } = req.body;

  if (!crop || !stage || !location) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const advice = `Given that your ${crop.toLowerCase()} crop is at ${stage.toLowerCase()} in ${location} with cloudy weather, a temperature of 18°C, and wind at 15 km/h, focus on pre-harvest management. Monitor grain moisture content closely; aim for the optimal level recommended for your specific variety and local storage practices to minimize post-harvest losses. With cloudy conditions, drying may be slower, so consider using mechanical drying if available. Check for any signs of disease or pest infestations that could affect grain quality before harvest. Ensure harvesting equipment is ready and calibrated to reduce grain loss during the process. Plan your harvest schedule to coincide with predicted weather patterns, prioritizing harvesting during drier periods if possible. Consider a pre-harvest desiccant application if appropriate for your variety and conditions, following label instructions carefully.`;

  res.json({ advice });
};
