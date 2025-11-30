import React, { useState } from "react";
import Header from "../../layouts/Header";

function Settings() {
  const [logoFile, setLogoFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type and size
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];
      const maxSize = 2 * 1024 * 1024; // 2MB
      
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (PNG, JPG, SVG)');
        return;
      }
      
      if (file.size > maxSize) {
        alert('File size must be less than 2MB');
        return;
      }
      
      setLogoFile(file);
    }
  };

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (PNG, JPG)');
        return;
      }
      
      if (file.size > maxSize) {
        alert('File size must be less than 5MB');
        return;
      }
      
      setBannerFile(file);
    }
  };

  const removeLogo = () => setLogoFile(null);
  const removeBanner = () => setBannerFile(null);

  return (
    <>
      <Header title="Settings" />

      <div className="max-w-4xl mx-auto space-y-8 p-6 animate-fadeIn">
        {/* Branding Section */}
        <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-all duration-300">
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Branding
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Customize your website's appearance with your logo and banner
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Logo Upload */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Logo
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your organization's logo. Displayed in the header and favicon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                {/* Logo Preview */}
                <div className="flex-shrink-0">
                  <div className="size-24 bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden">
                    {logoFile ? (
                      <img 
                        src={URL.createObjectURL(logoFile)} 
                        alt="Logo preview" 
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-3xl text-gray-400">
                        image
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-colors font-medium text-sm">
                      <span className="material-symbols-outlined text-sm">upload</span>
                      Choose File
                      <input 
                        type="file" 
                        className="hidden" 
                        accept=".png,.jpg,.jpeg,.svg"
                        onChange={handleLogoUpload}
                      />
                    </label>
                    
                    {logoFile && (
                      <button 
                        onClick={removeLogo}
                        className="flex items-center gap-2 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <p>• PNG, JPG, SVG formats supported</p>
                    <p>• Maximum file size: 2MB</p>
                    <p>• Recommended: Square aspect ratio, transparent background</p>
                  </div>
                  
                  {logoFile && (
                    <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      {logoFile.name} ({(logoFile.size / 1024).toFixed(1)} KB)
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              {/* Banner Upload */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Banner Image
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Header banner image for your website pages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  {/* Banner Preview */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden">
                      {bannerFile ? (
                        <img 
                          src={URL.createObjectURL(bannerFile)} 
                          alt="Banner preview" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-2xl text-gray-400">
                          wallpaper
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-colors font-medium text-sm">
                        <span className="material-symbols-outlined text-sm">upload</span>
                        Choose File
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".png,.jpg,.jpeg"
                          onChange={handleBannerUpload}
                        />
                      </label>
                      
                      {bannerFile && (
                        <button 
                          onClick={removeBanner}
                          className="flex items-center gap-2 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm"
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                      <p>• PNG, JPG formats supported</p>
                      <p>• Maximum file size: 5MB</p>
                      <p>• Recommended: 1920 × 600px for optimal display</p>
                      <p>• Aspect ratio: 16:5 works best</p>
                    </div>
                    
                    {bannerFile && (
                      <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        {bannerFile.name} ({(bannerFile.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 rounded-b-xl">
            <div className="flex items-center justify-end gap-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors shadow-sm">
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Settings;