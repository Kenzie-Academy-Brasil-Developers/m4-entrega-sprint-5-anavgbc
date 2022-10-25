import AppDataSource from "../../data-source";
import Categories from "../../entities/category.entity";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async ({
  name,
}: ICategoryRequest): Promise<Categories> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  if (!name) {
    throw new AppError("Name is missing");
  }

  const alreadyExists = await categoryRepository.findOneBy({ name });

  if (alreadyExists) {
    throw new AppError("Category already exists");
  }

  const newCategory = categoryRepository.create({
    name: name,
  });

  await categoryRepository.save(newCategory);

  return newCategory;
};

export default createCategoryService;
