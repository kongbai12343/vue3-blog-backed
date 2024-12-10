import http from "@/network/request"

//上传文件
export const uploadFile = (params: FormData) => {
	return http.post("/upload", params, {
		headers: { "Content-Type": "multipart/form-data" },
	})
}
