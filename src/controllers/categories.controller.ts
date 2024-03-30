import { Request, Response } from "express";
import { CategoriesService } from "../services/categoriesService";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesRepository } from "../database/repositories/categories.repository";

export class CategoriesController {
    async create(_: Request, res: Response) {
        const repository = new CategoriesRepository(CategoryModel);
        const service = new CategoriesService(repository);

        const result = await service.create();

        return res.status(201).json(result)
    }
}