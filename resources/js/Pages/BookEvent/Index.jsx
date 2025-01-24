import React from 'react';

import { Head, useForm } from '@inertiajs/react';

const UploadEvent = () => {
    const { data, setData, post, processing, errors } = useForm({
        event_name: '',
        location: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        rate: '',
        description: '',
        photo: null,
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // This will return the date in 'YYYY-MM-DD' format
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('event_name', data.event_name);
        formData.append('location', data.location);
        formData.append('start_date', formatDate(data.start_date));
        formData.append('end_date', formatDate(data.end_date));
        formData.append('start_time', data.start_time);
        formData.append('end_time', data.end_time);
        formData.append('rate', data.rate);
        formData.append('description', data.description);
        if (data.photo) {
            formData.append('photo_url', data.photo);
        }

        post('/events', formData);
    };


    return (
        <>
            <Head title="Upload Event - CamSociety" />
            
            <header className="bg-[#1F1F1F] flex justify-between items-center p-5">
                <div className="text-2xl text-white font-bold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="size-6 w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                    CAMSOCIETY
                </div>
                <nav className="space-x-5 text-white font-bold hidden md:flex">
                    <a href="#" className="hover:text-[#FF3300]">Home</a>
                    <a href="/marketplaceAll" className="hover:text-[#FF3300]">Marketplace</a>
                    <a href="/buy_photo" className="hover:text-[#FF3300]">Buy Photo</a>
                    <a href="/hirePhotographer" className="hover:text-[#FF3300]">Hire Photographer</a>
                    <a href="/upload_event" className="text-[#FF3300]">Event Listing</a>
                    <a href="/blogandtips" className="hover:text-[#FF3300]">Blog & Tips</a>
                </nav>
                <div className="flex text-white space-x-5 px-5">
                    <a href="/cart" className="hover:text-[#FF3300]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-[#FF3300]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>
                    </a>
                    <a href="/UserProfile" className="hover:text-[#FF3300]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </a>
                </div>
            </header>
            <section className="underline text-[#FF3300] text-end pr-5">
                <a href="/EventList">See Events details</a>
            </section>
            <main className="max-w-4xl mx-auto p-6 mt-6 border border-b-gray-200 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">List a New Event</h1>
                <form onSubmit={handleSubmit}  className="space-y-4">
                    <div className="mb-6">
                        <label htmlFor="event_name" className="block mb-2 text-sm font-medium text-gray-900">Event Name</label>
                        <input
                            type="text"
                            id="event_name"
                            value={data.event_name}
                            onChange={(e) => setData('event_name', e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 block w-full p-2.5"
                        />
                        {errors.event_name && <span className="text-red-600">{errors.event_name}</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={data.location}
                            onChange={(e) => setData('location', e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.location && <span className="text-red-600">{errors.location}</span>}
                    </div>
                    <div>
                        <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Duration
                        </label>
                        <div className="flex space-x-5">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="start_date"
                                    name="start_date"
                                    placeholder="Select start date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    value={data.start_date}
                                    onChange={(e) => setData("start_date", e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="end_date"
                                    name="end_date"
                                    placeholder="Select end date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    value={data.end_date}
                                    onChange={(e) => setData("end_date", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Start Time
                        </label>
                        <input
                            type="time"
                            id="start_time"
                            name="start_time"
                            min="09:00"
                            max="18:00"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                            value={data.start_time}
                            onChange={(e) => setData("start_time", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            End Time
                        </label>
                        <input
                            type="time"
                            id="end_time"
                            name="end_time"
                            min="09:00"
                            max="18:00"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                            value={data.end_time}
                            onChange={(e) => setData("end_time", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="rate" className="block text-sm font-medium text-gray-900 py-3">
                            Rate (BDT/hour)
                        </label>
                        <input
                            type="number"
                            id="rate"
                            name="rate"
                            placeholder="Rate in BDT"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                            value={data.rate}
                            onChange={(e) => setData("rate", e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-900 py-3">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            placeholder="Write event details ..."
                            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-900">Upload photo (optional)</label>
                        <input
                            type="file"
                            id="photo"
                            onChange={(e) => setData('photo', e.target.files[0])}
                            className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 block w-full"
                        />
                        {errors.photo && <span className="text-red-600">{errors.photo}</span>}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#FF3300] text-white px-6 py-2 rounded-lg shadow hover:bg-[#1F1F1F]"
                        >
                            {processing ? 'Uploading...' : 'Upload Event'}
                        </button>
                    </div>
                </form>
            </main>
            <footer className="bg-[#1F1F1F] text-white py-6">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pl-5">
                    {/* About */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">About</h3>
                        <p>
                            CamSociety is your one-stop platform for photographers and camera enthusiasts. Buy, sell, hire
                            photographers, and rent equipment all in one place.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
                        <ul>
                            <li>
                                <a href="/hirePhotographer" className="hover:text-[#FF3300]">
                                    Hire Photographer
                                </a>
                            </li>
                            <li>
                                <a href="/upload_event" className="hover:text-[#FF3300]">
                                    Book Events
                                </a>
                            </li>
                            <li>
                                <a href="/saleProducts" className="hover:text-[#FF3300]">
                                    Sell Items
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Contact</h3>
                        <p>Email: support@camsociety.com</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Address: 123 Photo Street, Photography City</p>
                    </div>
                    {/* FAQ */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">FAQ</h3>
                        <ul>
                            <li>
                                <a href="#" className="hover:text-[#FF3300]">
                                    How to sell photos?
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#FF3300]">
                                    How to rent equipment?
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#FF3300]">
                                    Payment options
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray-400 mt-6">
                    &copy; 2025 CamSociety. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default UploadEvent;
