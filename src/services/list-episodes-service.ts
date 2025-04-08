import { PodcastTransferModel as PodcastTranferModel } from "../models/filter-podcast-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTranferModel> => {
    //Define o contrato
    let responseFormat: PodcastTranferModel = {
          statusCode: 0,
          body: [],
        };
        //Busca os dados
    const data = await repoPodcast();

        //Verifica o tipo de resposta
        responseFormat.statusCode = 
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT
        
        responseFormat.body = data;

 return responseFormat;

};

