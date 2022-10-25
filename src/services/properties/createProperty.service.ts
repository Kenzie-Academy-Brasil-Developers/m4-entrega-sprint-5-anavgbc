import AppDataSource from "../../data-source";
import Addresses from "../../entities/addresses.entity";
import Categories from "../../entities/category.entity";
import Properties from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const categoryRepository = AppDataSource.getRepository(Categories);

  const { district, zipCode, number, city, state }: IAddressRequest = address;

  const categoryById = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
  });

  if (!categoryById) {
    throw new AppError("Invalid categoryId", 404);
  }

  if (zipCode.length !== 8) {
    throw new AppError("Invalid zipCode");
  }

  if (state.length !== 2) {
    throw new AppError("Invalid state");
  }

  const addressAlreadyExists = await addressRepository.findOneBy({
    district,
    zipCode,
    number,
    city,
    state,
  });

  if (addressAlreadyExists) {
    throw new AppError("Property already exists");
  }

  const createdAddress = addressRepository.create({
    district,
    zipCode,
    number,
    city,
    state,
  });

  // console.log(value, size, categoryId);

  const propertyAlreadyExists = await propertyRepository.findOneBy({
    value,
    size,
  });

  if (propertyAlreadyExists) {
    throw new AppError("Property already exists");
  }

  await addressRepository.save(createdAddress);

  const property = {
    value,
    size,
    address: createdAddress,
    categoryId,
    category: categoryById,
  };

  const newProperty = propertyRepository.create(property);

  await propertyRepository.save(newProperty);

  return newProperty;
};

export default createPropertyService;
