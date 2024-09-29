import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080';

const prefix = `${API_SERVER_HOST}/api/replies`;

export const postReply = async (replyData) => {
    const formData = new FormData();

    formData.append('bno', replyData.bno);
    formData.append('replierId', replyData.replierId);
    formData.append('content', replyData.content);

    const res = await axios.post(`${prefix}/`, formData)

    return res.data
};

export const getReply = async (rno) => {
    const res = await axios.get(`${prefix}/${rno}`);

    return res.data
}

export const getReplyByBno = async (bno) => {
    const res = await axios.get(`${prefix}/board/${bno}`);

    return res.data
}

export const putReply = async (rno) => {
    const res = await axios.put(`${prefix}/${rno}`);

    return res.data
}

export const deleteReply = async (rno) => {
    const res = await axios.delete(`${prefix}/${rno}`);

    return res.data
}