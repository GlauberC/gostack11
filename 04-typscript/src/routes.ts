import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Glauber",
    email: "glaubercarv@gmail.com",
    password: "123456",
    techs: ["NodeJS", "ReactJS", { title: "React-Native", experience: 100 }]
  });
  return response.json(user);
}
