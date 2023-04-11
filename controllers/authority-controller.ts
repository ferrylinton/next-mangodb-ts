import { NextApiRequest, NextApiResponse } from "next";
import * as authorityService from "@/services/authority-service";


export const find = async (req: NextApiRequest,
    res: NextApiResponse) => {
    try {
        const authorities = await authorityService.find();
        console.log(authorities);
        res.status(200).json(authorities);
    } catch (err: any) {
        console.error(err);
        const message = err.message;
        res.status(500).send({ message });
    }
}

export const findOneById = async (req: NextApiRequest,
    res: NextApiResponse) => {
    try {
        const { id } = req.query;
        const authority = await authorityService.findOneById(id);

        if(authority){
            res.status(200).json(authority);
        }else{
            res.status(404).json({message: `Data with id=${id} is not found`});
        }
       
    } catch (err: any) {
        console.error(err);
        const message = err.message;
        res.status(500).send({ message });
    }
}

export const save = async (req: NextApiRequest,
    res: NextApiResponse) => {
    try {
        const authority = await authorityService.save(req.body);
        res.status(200).json(authority);
    } catch (err: any) {
        console.error(err);
        const message = err.message;
        res.status(500).send({ message });
    }
}

export const update = async (req: NextApiRequest,
    res: NextApiResponse) => {
    try {
        const { id } = req.query;
        const authority = await authorityService.update(id, req.body);
        
        if(authority){
            res.status(200).json({message: `Data with id=${id} is updated`, authority});
        }else{
            res.status(404).json({message: `Data with id=${id} is not found`});
        }
    } catch (err: any) {
        console.error(err);
        const message = err.message;
        res.status(500).send({ message });
    }
}

export const deleteOneById = async (req: NextApiRequest,
    res: NextApiResponse) => {
    try {
        const { id } = req.query;
        const authority = await authorityService.deleteOneById(id);

        if(authority){
            res.status(200).json({message: `Data with id=${id} is deleted`, authority});
        }else{
            res.status(404).json({message: `Data with id=${id} is not found`});
        }
        
    } catch (err: any) {
        console.error(err);
        const message = err.message;
        res.status(500).send({ message });
    }
}