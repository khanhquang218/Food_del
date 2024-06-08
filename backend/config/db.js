import mongoose from 'mongoose';

export const connectDB = async () => {
	await mongoose.connect('mongodb+srv://khanhquang213:0913374800@cluster0.eigvwkq.mongodb.net/food-del').then(() => console.log('DB Connected'));
};
