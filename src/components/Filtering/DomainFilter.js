import { Label, Radio } from 'flowbite-react';
import { GenderFilter } from './GenderFilter';
import { AvailabilityFilter } from './AvailabilityFilter';
export function Filtering({ selectedDomain, setSelectedDomain, selectedGender, setSelectedGender, selectedAvailability, setSelectedAvailability }) {
    // const [selectedDomain, setSelectedDomain] = useState('');

    // Function to handle radio button selection
    const handleDomainChange = (event) => {
        setSelectedDomain(event.target.value);
    };
    // console.log({ selectedDomain });

    return (
        <>
            {/* Domain selecting */}
            <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4 font-bold">Domain</legend>
                <div className="flex items-center gap-2">
                    <Radio id="Sales" name="domain" value="Sales" defaultChecked checked={selectedDomain === 'Sales'}
                        onChange={handleDomainChange} />
                    <Label htmlFor="Sales">Sales</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Radio id="Finance" name="domain" value="Finance" checked={selectedDomain === 'Finance'}
                        onChange={handleDomainChange} />
                    <Label htmlFor="Finance">Finance</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="Marketing" name="domain" value="Marketing" checked={selectedDomain === 'Marketing'}
                        onChange={handleDomainChange} />
                    <Label htmlFor="Marketing">Marketing</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="Management" name="domain" value="Management" checked={selectedDomain === 'Management'}
                        onChange={handleDomainChange} />
                    <Label htmlFor="Management" >
                        Management
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="UI Designing" name="domain" value="UI Designing" checked={selectedDomain === 'UI Designing'}
                        onChange={handleDomainChange} />
                    <Label htmlFor="UI Designing" >
                        UI Designing
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="IT" name="domain" value="IT" checked={selectedDomain === 'IT'}
                        onChange={handleDomainChange} />
                    <Label htmlFor="IT">IT</Label>
                </div>
            </fieldset>
            <div className='mt-5'>
                <GenderFilter selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
            </div>
            <div className='mt-5'>
                <AvailabilityFilter selectedAvailability={selectedAvailability} setSelectedAvailability={setSelectedAvailability} />
            </div>
        </>
    );
}
