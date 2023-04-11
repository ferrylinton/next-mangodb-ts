import 'dotenv/config';
import { findOneByEmail } from '@/services/user-service';


(async () => {
    try {
        const user = await findOneByEmail('admin@gmail.com');
        console.log(user);

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})()

