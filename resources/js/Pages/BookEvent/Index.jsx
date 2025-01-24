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

            <header className="bg-[#F8E9E7]">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <div className="flex items-center gap-3">
                        <img src="https://placehold.co/40x40" alt="CamSocity Logo" className="h-10 w-10" />
                        <span className="text-lg">
                            <p className="font-semibold">CamSociety</p>Your Photography Hub
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="/dashboard"
                            className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-indigo-400 text-gray-900 focus:border-indigo-700"
                        >
                            Home
                        </a>
                        <a
                            href="/photomarket"
                            className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700"
                        >
                            Photo Market
                        </a>
                        <a
                            href="/hirephotographer"
                            className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700"
                        >
                            Hire Photographer
                        </a>
                        <a
                            href="/eventbook"
                            className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700"
                        >
                            Book Event
                        </a>
                        <a
                            href="/blogsntips"
                            className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700"
                        >
                            Blog & Tips
                        </a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 justify-between">
                                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                    <div className="relative ms-3">
                                        <div className="relative">
                                            <div>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                                    >
                                                        Shariful Islam
                                                        <svg className="-me-0.5 ms-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="-me-2 flex items-center sm:hidden">
                                    <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none">
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                <a
                                    href="/dashboard"
                                    className="flex w-full items-start border-l-4 py-2 pe-4 ps-3 border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800 text-base font-medium transition duration-150 ease-in-out focus:outline-none"
                                >
                                    Dashboard
                                </a>
                            </div>
                            <div className="border-t border-gray-200 pb-1 pt-4">
                                <div className="px-4">
                                    <div className="text-base font-medium text-gray-800">Shariful Islam</div>
                                    <div className="text-sm font-medium text-gray-500">sharifislam0505@gmail.com</div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <a
                                        href="/profile"
                                        className="flex w-full items-start border-l-4 py-2 pe-4 ps-3 border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 text-base font-medium transition duration-150 ease-in-out focus:outline-none"
                                    >
                                        Profile
                                    </a>
                                    <button
                                        className="flex w-full items-start border-l-4 py-2 pe-4 ps-3 border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 text-base font-medium transition duration-150 ease-in-out focus:outline-none"
                                        type="button"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="underline text-[#FF3300] text-end pr-5">
                <a href="/EventList">See Events details</a>
            </section>
            <main className="max-w-4xl mx-auto p-6 mt-6 border border-b-gray-200 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">List a New Event</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
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
            <footer className="bg-[#F8E9E7] py-6">
                <div className="container mx-auto text-center">
                    <p className="text-gray-600">© 2025 CamSociety. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default UploadEvent;
