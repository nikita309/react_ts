import Api from "../Common/Api"
import { Msg } from "../Common/types";

const getMsgsList = async () => {
    const response = await Api.get<Msg[]>('/')
    return response.data;
}

export { getMsgsList };