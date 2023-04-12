import 'dotenv/config';
import * as authorityService from '@/services/authority-service';
import { insertRole } from '@/services/role-service';
import { insertUser } from '@/services/user-service';


(async () => {
    try {
        const authorityUserManagementModify = await authorityService.save({"name": "USER_MANAGEMENT_MODIFY"});
        const authorityUserManagementRead = await authorityService.save({"name": "USER_MANAGEMENT_READ"});
       
        const roleAdmin = await insertRole({
            "name": "ADMIN",
            "authorityIds": [
                authorityUserManagementModify._id,
                authorityUserManagementRead._id
            ]
        });

        await insertUser({
            "email": "admin@gmail.com",
            "password": "password",
            "locked": false,
            "roleId": roleAdmin._id
        });

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})()

