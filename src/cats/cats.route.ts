//* READ 고양이 전체 데이터 다 조회
import {Cat} from "./cats.model";
import { Router} from "express";

const router = Router();

router.get('/cats/', (req, res) => {
    try {
        const cats = Cat;
        // throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
});

//* READ 특정 고양이 데이터 조회
router.get('/cats/:id', (req, res) => {
    try {
        const params = req.params;

        const cat = Cat.find((cat)=>{
            return cat.id === params.id;
        });

        res.status(200).send({
            success: true,
            data: {
                cat,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
});

//* CREATE 새로운 고양이 추가
router.post('/cats', (req, res) => {
    try {
        const data =  req.body;
        console.log(data);
        Cat.push(data); //create

        res.status(200).send({
            success: true,
            data: {data},
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
});

export default router;