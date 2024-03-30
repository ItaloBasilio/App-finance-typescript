import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dtios/categories.dto";
import { Category } from "../entities/category.entity";

export class CategoriesService {
    constructor( private categoriesRepository : CategoriesRepository ){}

    async create({ title, color }: CreateCategoryDTO): Promise<Category>{
        const category = new Category ({
            title,
            color,
        });

        const createdCategory = await this.categoriesRepository.create(category);

        return createdCategory;
    } 
}