import {Cat} from "./cats.model";
import {Request, Response} from "express";

//* READ 고양이 전체 데이터 다 조회
export const readAllCat = (req :Request , res :Response) => {
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
};

//* READ 특정 고양이 데이터 조회
export const readCat = (req :Request , res :Response) =>{
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
};

//* CREATE 새로운 고양이 추가
export const createCat = (req :Request , res :Response) => {
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
};


//* UPDATE 고양이 데이터 업데이트 -> PUT
export const updateCat = (req :Request , res :Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat)=>{
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        })

        const cat = Cat.find((cat)=>{
            return cat.id === params.id;
        });

        res.status(200).send({
            success: true,
            data: {
                cat : result,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
export const updatePartialCat = (req :Request , res :Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat)=>{
            if (cat.id === params.id) {
                //구조분해 할당
                cat = {...cat, ...body};
                result = cat;
            }
        })

        const cat = Cat.find((cat)=>{
            return cat.id === params.id;
        });

        res.status(200).send({
            success: true,
            data: {
                cat : result,
            },
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};

//* DELETE 고양 데이터 삭제 -> DELETE
export const deleteCat = (req :Request , res :Response) => {
    try {
        const params = req.params;
        const newCat = Cat.filter((cat) => cat.id !== params.id);
        res.status(200).send({
            success: true,
            data: newCat,

        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,

        });

    }
};



// export default router;