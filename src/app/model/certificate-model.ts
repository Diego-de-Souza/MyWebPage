export interface CertificatesModel {
    id:Number;
    formation: string,
    carga_horaria: number,
    data_conclusao: string,
    imagem: {
        frente: string,
        verso: string
    },
}

export interface CertificatePrint {
    formation: string,
    imagem: {
        frente: string,
        verso: string
    }
}