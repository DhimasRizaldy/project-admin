import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const userData = {
  userId: "user-id",
  username: "dimas02",
  email: "drdev404@gmail.com",
  fullname: "Dhimas Rizaldy",
  fotoProfil:
    "https://i.pinimg.com/736x/33/2b/4d/332b4d4caeca0b0cbb15a86c640785b6.jpg",
  profile: {
    profileId: "profile-id",
    userId: "user-id",
    jenisKelamin: "",
    alamat: "Jln. Kaliurang KM 5, Sleman, Yogyakarta",
    provinsi: "DI Yogyakarta",
    kabupaten: "Kota Yogyakarta",
    noTelepon: "081234567890",
  },
};

const genderOptions = [
  { value: "Laki-laki", label: "Laki-laki" },
  { value: "Perempuan", label: "Perempuan" },
];

export default function Profile() {
  const [user, setUser] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      profile: {
        ...prevUser.profile,
        [name]: value,
      },
    }));
  };

  const handleGenderChange = (selectedOption) => {
    setUser((prevUser) => ({
      ...prevUser,
      profile: {
        ...prevUser.profile,
        jenisKelamin: selectedOption.value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-white">
            <CardTitle className="text-lg font-semibold text-blue-900">
              Profil Pengguna
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.fotoProfil} alt={user.fullname} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="w-full space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nama Lengkap
                    </label>
                    <Input
                      type="text"
                      name="fullname"
                      value={user.fullname}
                      onChange={handleChange}
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <Input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleChange}
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jenisKelamin"
                      className="block text-sm font-medium text-gray-700">
                      Jenis Kelamin
                    </label>
                    <Select
                      name="jenisKelamin"
                      value={genderOptions.find(
                        (option) => option.value === user.profile.jenisKelamin
                      )}
                      onChange={handleGenderChange}
                      options={genderOptions}
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Alamat
                    </label>
                    <Input
                      type="text"
                      name="alamat"
                      value={user.profile.alamat}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Provinsi
                    </label>
                    <Input
                      type="text"
                      name="provinsi"
                      value={user.profile.provinsi}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Kabupaten
                    </label>
                    <Input
                      type="text"
                      name="kabupaten"
                      value={user.profile.kabupaten}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nomor Telepon
                    </label>
                    <Input
                      type="tel"
                      name="noTelepon"
                      value={user.profile.noTelepon}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-4">
                <Link
                  to="/simpan"
                  className="w-full text-center text-sm bg-blue-600 text-white hover:bg-blue-500 py-2 rounded-md">
                  Simpan Perubahan
                </Link>
                <Link
                  to="/change-password"
                  className="w-full text-center text-sm bg-blue-600 text-white hover:bg-blue-500 py-2 rounded-md">
                  Ganti Password
                </Link>
              </div>
              <Link
                to="/dashboard"
                className="text-blue-600 text-sm hover:underline">
                Kembali ke dashboard
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
