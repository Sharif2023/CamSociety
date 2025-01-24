import React, { useState } from "react";
import { Head } from '@inertiajs/react';
import axios from "axios";

const PhotographerBlogNTips = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  //database
  const [formData, setFormData] = useState({ title: "", content: "", image: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    formDataObj.append("content", formData.content);
    if (formData.image) formDataObj.append("image", formData.image);

    try {
      const response = await axios.post("/blogntips", formDataObj, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message || "Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error.response ? error.response.data : error.message);
      alert(error.response?.data?.message || "Failed to create post.");
    }
  };

  const posts = [
    {
      id: 1,
      title: "বিবাহের ফটোগ্রাফির জন্য শীর্ষ টিপস",
      description: "এই বাস্তব টিপসগুলির সাহায্যে কীভাবে অবিস্মরণীয় বিবাহের মুহূর্তগুলি ক্যাপচার করবেন তা আবিষ্কার করুন...",
      image: "photos/blogandtipspost1.png",
      author: "John Doe",
      modalContent: {
        title: "Top Tips for Wedding Photography",
        image: "photos/blogandtipspost1.png",
        content: (
          <>
            <p>বিবাহের ফটোগ্রাফি হল নিরবধি মুহূর্তগুলি ক্যাপচার করা। আপনাকে সেরা শট পেতে সাহায্য করার জন্য এখানে কিছু ব্যবহারিক টিপস রয়েছে:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>মূল মুহূর্তের জন্য প্রস্তুত হতে ইভেন্টের সময়সূচী বুঝে নিন।</li>
              <li>Soft and Flattering ছবি তৈরি করতে যখনই সম্ভব প্রাকৃতিক আলো ব্যবহার করুন।</li>
              <li>Candid মুহূর্তগুলি ক্যাপচার করার উপর ফোকাস করুন, শুধু পোজ করা নয়।</li>
              <li>সৃজনশীল শট জন্য বিভিন্ন কোণ সঙ্গে পরীক্ষা.</li>
              <li>প্রযুক্তিগত সমস্যা এড়াতে সর্বদা একটি ব্যাকআপ ক্যামেরা এবং ব্যাটারি রাখুন।</li>
            </ul>
          </>
        ),
        likes: 10,
      },
    },
    {
      id: 2,
      title: "5 Tricks for Outdoor Portraits",
      description: "Learn how to make the most of natural light to create stunning portraits...",
      image: "photos/blogandtipspost2.png",
      author: "Jane Smith",
      modalContent: {
        title: "5 Tricks for Outdoor Portraits",
        image: "photos/blogandtipspost2.png",
        content: (
          <>
            <p>Here are some tricks to take stunning outdoor portraits:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Use the golden hour for soft and warm light.</li>
              <li>Experiment with bokeh by using a wide aperture.</li>
              <li>Consider your background to enhance the subject.</li>
              <li>Capture candid moments to convey emotions.</li>
              <li>Make use of natural surroundings for a more dynamic composition.</li>
            </ul>
          </>
        ),
      },
    },
  ];

  return (
    <div>
      <Head title="Photographer Blog & Tips" />
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

      <section className="bg-gray-600 text-white py-2 text-center">
        <h1 className="text-4xl font-bold">Blog & Tips</h1>
        <p className="mt-2 text-[#FAF0E6]">
          Explore thoughts, tips, and advice from professional photographers.
        </p>
      </section>
      <main className="max-w-6xl mx-auto p-6 mt-6">
        {/* Add Post Button */}
        <label
          htmlFor="crud-modal-toggle"
          className="inline-flex text-white bg-[#FF3300] hover:bg-[#1F1F1F] font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer max-w-25"
          onClick={() => openModal("addPost")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add post
        </label>

        {/* Render Blog Post Cards */}
        <br /><br />
        <h2 className="text-2xl font-bold mb-4 text-[#1F1F1F]">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#1F1F1F]">{post.title}</h3>
                <p className="text-[#1F1F1F] mt-2">{post.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-500 text-sm">By {post.author}</span>
                  <button
                    onClick={() => openModal(`modal-${post.id}`)}
                    className="text-[#FF3300] font-semibold hover:underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modals for Blog Posts */}
        {posts.map((post) => (
          <div
            key={post.id}
            id={`modal-${post.id}`}
            className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ${activeModal === `modal-${post.id}` ? "" : "hidden"}`}
          >
            <div className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between p-5 border-b">
                <h3 className="text-2xl font-semibold text-gray-900">{post.modalContent.title}</h3>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 rounded-lg text-sm"
                  onClick={closeModal}
                >
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex flex-col p-6 space-y-4">
                <img src={post.modalContent.image} alt={post.modalContent.title} className="w-full h-60 object-cover rounded-lg mb-4" />
                {post.modalContent.content}
              </div>
              <div className="p-5 border-t flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-[#FF3300] text-white px-6 py-2 rounded-lg hover:bg-[#1F1F1F] font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Modal for Adding New Post */}
        {activeModal === "addPost" && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 justify-center items-center bg-black bg-opacity-50 flex">
            <div className="relative w-[90%] max-w-lg bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Post Your Blog or Tip
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal Body */}
              <form onSubmit={handleSubmit} className="p-4 md:p-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload Photo
                </label>
                <input
                  className="block w-full text-sm text-[#1F1F1F] hover:bg-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="name"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter The Title"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="description"
                    >
                      Content
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      name="content"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your blogs and tips"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-[#FF3300] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Post
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-white inline-flex items-center bg-[#1F1F1F] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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
    </div>
  );
};
export default PhotographerBlogNTips;
