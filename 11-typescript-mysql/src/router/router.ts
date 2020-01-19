import {Router, Request, Response} from 'express';

const router = Router();

router.get('/ok', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo está bien'
    })
});

router.get('/ok/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    res.json({
        ok: true,
        mensaje: 'Todo está bien',
        id
    })
});

export default router;