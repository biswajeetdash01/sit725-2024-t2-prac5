const Contact = require('../models/model'); // Adjust the path according to your directory structure

// Controller logic for saving contact data
const saveContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create and save the new contact
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: 'Contact saved successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error saving contact: ' + error.message });
    }
};

module.exports = saveContact;
