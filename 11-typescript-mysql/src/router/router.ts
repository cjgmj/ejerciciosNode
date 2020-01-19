import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    const query = `select * from heroes`;

    MySQL.ejecutarQuery(query, (err: any, heroes: Object[]) => {
        if(err) {
            res.status(400).json({
                ok: true,
                error: err
            });
        }else {
            res.json({
                ok: true,
                heroes
            });
        }
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    const escapedId = MySQL.instance.con.escape(id);

    const query = `select * from heroes where id = ${escapedId}`;

    MySQL.ejecutarQuery(query, (err: any, heroes: Object[]) => {
        if(err) {
            res.status(400).json({
                ok: true,
                error: err
            });
        }else {
            res.json({
                ok: true,
                heroes
            });
        }
    });
});

export default router;