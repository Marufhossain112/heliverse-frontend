import { Card, Spinner } from 'flowbite-react';
import { useGetUsersQuery } from '../../redux/features/users/usersApi';
import { useSelector } from 'react-redux';

export function TeamDetails() {
    const { teams } = useSelector((state) => state.persistedReducer);
    // console.log(teams.length);
    // console.log(teams.teams);

    const { isLoading } = useGetUsersQuery();

    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <div className='mx-10'>
            <div>
                <h5 className='text-lg text-center pt-3 pb-2 font-bold'>Team Members</h5>
            </div>
            {
                teams?.length === 0 && <div className='text-center mx-auto text-gray-700'>No members yet added to the team.</div>
            }
            <div className='user-container grid grid-cols-5 gap-4'>
                {teams?.map((user, index) => (
                    <Card className="max-w-sm">
                        <div className="flex justify-end px-4 pt-4">
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                alt="avatar"
                                height="96"
                                src={user?.avatar}
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-white">{`${user?.first_name} ${user?.last_name}`}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                            <div className=" flex flex-col justify-center items-center  ">
                                <span className="text-sm text-gray-700">Gender: <span>{user?.gender}</span> </span>
                                <span className="text-sm text-gray-700">Domain: <span>{user?.domain.length > 8 ? user?.domain.slice(0, 9) : user?.domain}</span> </span>
                                <span className="text-sm text-gray-700">Availability: {
                                    user?.available ? <span className='text-green-600'>True</span> : <span className='text-red-600'>False</span>
                                } </span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
