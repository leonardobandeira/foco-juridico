export default interface Usuario {
  uid: string;
  nome: string;
  email: string;
  token: string;
  provedor: string;
  picture: string;
}

export async function usuarioNormalizado(usuarioFirebase: any): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName || '',
    email: usuarioFirebase.email || '',
    token,
    provedor: usuarioFirebase.providerData[0]?.providerId || '',
    picture: usuarioFirebase.photoURL || '',
  };
}
