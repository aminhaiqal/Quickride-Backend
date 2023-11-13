import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateUserProfile = async (req, res) => {
    const userId = req.params.id;
    const newProfileData = req.body;

    try {
        const user = await prisma.user.update({
            where: { id: Number(userId) },
            data: newProfileData,
        });
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const deleteUserProfile = async (req, res) => {
    const userId = req.params.id;

    try {
        await prisma.user.delete({ where: { id: Number(userId) } });
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};