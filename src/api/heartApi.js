import jwtAxios from "../util/jwtUtil";

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/hearts`;

export const postHearts = async (bno, memberId) => {
    const formData = new FormData();
    formData.append('bno', bno);
    formData.append('memberId', memberId);

    try {
        const res = await jwtAxios.post(`${prefix}/`, formData, {
        });
        return res.data;
    } catch (error) {
        console.error('Error uploading video:', error);
        throw error;
    }
};


export const getHeart = async (hno) => {
    const res = await jwtAxios.get();

    return res.data;
}

export const getHeartListByBno = async (bno) => {
    if(!bno) {
        throw new Error("Board number (bno) is required");
    }
    const res = await jwtAxios.get(`${prefix}/board/${bno}`);
    return res.data
}

export const deleteHeart = async (hno) => {
    if (!hno) {
        throw new Error("Heart number (hno) is required");
    }
    const res = await jwtAxios.delete(`${prefix}/${hno}`);
    return res.data;
}

export const findHnoByMnoBno = async (mno, bno) => {
    try {
        const heartList = await getHeartListByBno(bno);
        
        if (Array.isArray(heartList)) {
            for (const h of heartList) {
                if (h.memberId === mno) { 
                    return h.hno;
                }
            }
        }

        return null;
    } catch (error) {
        console.error("Error finding HNO by MNO and BNO:", error);
        throw error; 
    }
}
