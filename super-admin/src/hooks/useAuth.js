import { adminAuth } from 'services/planner/plannerAction';

const useAuth = async () => {
    let email = 'admin@medusa-test.com';
    let password = 'supersecret';

    await adminAuth({email, password});

}

export default useAuth;