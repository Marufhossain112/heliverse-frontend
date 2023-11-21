import { Label, Radio } from 'flowbite-react';
export function AvailabilityFilter({ selectedAvailability, setSelectedAvailability }) {
    // const [selectedAvailability, setSelectedAvailability] = useState('');

    // Function to handle radio button selection
    const handleAvailabilityChange = (event) => {
        setSelectedAvailability(event.target.value);
    };
    // console.log({ selectedAvailability });

    return (
        <>
            {/* gender selecting */}
            <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4 font-bold">Gender</legend>
                <div className="flex items-center gap-2">
                    <Radio id="True" name="Availability" value={true} defaultChecked checked={selectedAvailability === true}
                        onChange={handleAvailabilityChange} />
                    <Label htmlFor="True">True</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Radio id="False" name="Availability" value={false} checked={selectedAvailability === false}
                        onChange={handleAvailabilityChange} />
                    <Label htmlFor="False">False</Label>
                </div>
            </fieldset>
        </>
    );
}
