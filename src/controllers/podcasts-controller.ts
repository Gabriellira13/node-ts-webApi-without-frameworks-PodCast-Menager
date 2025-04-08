import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes';
import { ContentType } from '../services/content-type';
import { PodcastTransferModel } from '../models/filter-podcast-model';

const defaultContent = { 'content-type': ContentType.JSON }

export const getListEpisodes = async (
    req : IncomingMessage,
     res : ServerResponse
    ) =>{

     const content = await serviceListEpisodes()

    res.writeHead(content.statusCode,defaultContent)
    res.write(JSON.stringify(content));
    res.end();
};

export const getFilterEpisodes = async (
    req : IncomingMessage,
     res : ServerResponse
    ) =>{
       
        const content: PodcastTransferModel = await serviceFilterEpisodes(req.url ?? null);

        res.writeHead(content.statusCode, defaultContent)
        res.write(JSON.stringify(content));
        res.end();
    };


