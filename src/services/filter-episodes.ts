import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";
import { promises } from "dns";



export const serviceFilterEpisodes = async (podcastName: string | null

):Promise<PodcastTransferModel> => {  
    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
      statusCode: 0,
      body: [],
    };

    //busca os dados
   const queryString = podcastName?.split("?p=")[1] || "";
   const data = await repoPodcast(queryString);

    //verifica se tem conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data;

    return responseFormat;
}