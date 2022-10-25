import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";

const listPropertiesService = async () => {
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const allProperties = await propertiesRepository.find();

  return allProperties;
};
export default listPropertiesService;
