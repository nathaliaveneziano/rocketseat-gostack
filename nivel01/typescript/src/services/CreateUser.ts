/**
 * Para criar: name, email, password
 */

// interface => definir o formato de uma variável
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  // Tipo variável
  techs: Array<string | TechObject>;
  // Tipo único
  // techs: string[];
}

export default function createUser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
