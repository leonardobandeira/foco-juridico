export default interface Usuario {
    uid: string
    email: string | null;
    nome: string | null;
    token: string
    provedor: string | null;
    imagemUrl: string | null;
}