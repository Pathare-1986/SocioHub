import React from "react";
import { dummyUserData } from "../assets/assets";
import { Pencil, PencilIcon } from "lucide-react";
import { useState } from "react";

const ProfileModel = () => {
  const user = dummyUserData;

  const [editForm, setEditForm] = useState({
    username: user.username,
    bio: user.bio,
    location: user.location,
    profile_picture: user.profile_picture,
    full_name: user.full_name,
    cover_picture: null,
  });

  const handleSaveProfile = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-110 h-screen overflow-y-scroll bg-black/50">
      <div className="max-w-2xl sm:py-6 mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Edit Profile
          </h1>
          <form className="space-y-4" onSubmit={handleSaveProfile}>
            {/* Profile Picture */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="profile_picture"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profile Picture
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  id="profile_picture"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      profile_picture: e.target.files[0],
                    })
                  }
                />
                <div className="group/profile relative">
                  <img
                    className="w-24 h-24 rounded-full object-cover mt-2"
                    src={
                      editForm.profile_picture instanceof File
                        ? URL.createObjectURL(editForm.profile_picture)
                        : user.profile_picture
                    }
                  />
                  <div className="absolute hidden group-hover/profile:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-full items-center justify-center">
                    <PencilIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>

            {/* Cover photo */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="cover_picture"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cover Photo
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  id="cover_picture"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      cover_picture: e.target.files[0],
                    })
                  }
                />
                <div className="group/cover relative">
                  <img
                    className="w-40 h-40 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 object-cover mt-2"
                    src={
                      editForm.cover_picture
                        ? URL.createObjectURL(editForm.cover_picture)
                        : user.cover_photo
                    }
                  />
                  <div className="absolute hidden group-hover/cover:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-lg items-center justify-center">
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;
