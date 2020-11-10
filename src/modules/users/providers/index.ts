import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCrypts';
import { container } from 'tsyringe';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
