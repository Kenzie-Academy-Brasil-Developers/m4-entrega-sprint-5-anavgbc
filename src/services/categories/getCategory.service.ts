import AppDataSource from "../../data-source";
import Categories from "../../entities/category.entity";

const getCategoryService = async (): Promise<Categories[]> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const allCategories = await categoriesRepository.find();

  return allCategories;
};
export default getCategoryService;
