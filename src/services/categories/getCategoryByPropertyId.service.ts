import AppDataSource from "../../data-source";
import Categories from "../../entities/category.entity";
import Properties from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const getCategoryByPropertyIdService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  //Lista todos imóveis que pertencem a uma categoria

  const categorySelected = await categoryRepository.findOne({
    where: { id },
    relations: {
      properties: true,
    },
  });

  // console.log(categorySelected);

  if (!categorySelected) {
    throw new AppError("Category doesn't exist", 404);
  }

  return categorySelected;
};

export default getCategoryByPropertyIdService;
