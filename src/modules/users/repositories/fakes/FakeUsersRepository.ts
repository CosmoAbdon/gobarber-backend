import { v4 as uuid } from 'uuid';

import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const userExists = this.users.find(user => user.id === id);
    return userExists;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const userExists = this.users.find(user => user.email === email);
    return userExists;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
