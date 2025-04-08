import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controller";

export const app = async (request: http.IncomingMessage, response:http.ServerResponse)=> {
        
    //Query String
    //http://localhost:8080/api/episode?p=flow
    const [baseUrl, queryString] = request.url?.split("?") || ["", ""];

    console.log(baseUrl);
    console.log(queryString);

    
    //listar podcasts
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
       await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODES)
        await getFilterEpisodes(request, response);
};
