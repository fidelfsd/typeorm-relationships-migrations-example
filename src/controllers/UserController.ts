import { Request, Response } from "express";

// -----------------------------------------------------------------------------

// Datos de prueba
const users = [
   { id: 1, name: "Usuario 1" },
   { id: 2, name: "Usuario 2" },
   { id: 3, name: "Usuario 3" },
];

class UserController {
   // Ruta para obtener todos los usuarios
   static getAllUsers(req: Request, res: Response) {
      try {
         res.json(users);
      } catch (error) {
         res.status(500).json({ error: "Error al obtener los usuarios" });
      }
   }

   // Ruta para obtener un usuario por su ID
   static getUserById(req: Request, res: Response) {
      const userId = parseInt(req.params.id);

      const user = users.find((u) => u.id === userId);

      if (user) {
         res.json(user);
      } else {
         res.status(404).json({ error: "Usuario no encontrado" });
      }
   }
}

export default UserController;
