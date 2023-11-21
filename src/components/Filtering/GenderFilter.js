import { Label, Radio } from 'flowbite-react';
export function GenderFilter({ selectedGender, setSelectedGender }) {
    // const [selectedGender, setSelectedGender] = useState('');

    // Function to handle radio button selection
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    // console.log({ selectedGender });

    return (
        <>
            {/* gender selecting */}
            <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4 font-bold">Gender</legend>
                <div className="flex items-center gap-2">
                    <Radio id="Male" name="Gender" value="Male" defaultChecked checked={selectedGender === 'Male'}
                        onChange={handleGenderChange} />
                    <Label htmlFor="Male">Male</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Radio id="Female" name="Gender" value="Female" checked={selectedGender === 'Female'}
                        onChange={handleGenderChange} />
                    <Label htmlFor="Female">Female</Label>
                </div>
            </fieldset>
        </>
    );
}
