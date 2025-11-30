import React from "react";
import { AlertTriangle, X, AlertCircle, CheckCircle2 } from "lucide-react";

function ConfirmDialog({
  onClose,
  title = "Confirm Action",
  message,
  warningMessage,
  onConfirm,
  onCancel,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  type,
  isLoading = false,
}) {
  const handleCancel = onCancel || onClose;
  
  const getTypeStyles = () => {
    const styles = {
      warning: {
        icon: AlertTriangle,
        iconColor: "text-yellow-600 dark:text-yellow-400",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
        borderColor: "border-yellow-200 dark:border-yellow-800",
        textColor: "text-yellow-800 dark:text-yellow-300",
        buttonColor: "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500"
      },
      danger: {
        icon: AlertCircle,
        iconColor: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-900/20",
        borderColor: "border-red-200 dark:border-red-800",
        textColor: "text-red-800 dark:text-red-300",
        buttonColor: "bg-red-600 hover:bg-red-700 focus:ring-red-500"
      },
      info: {
        icon: AlertCircle,
        iconColor: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-800",
        textColor: "text-blue-800 dark:text-blue-300",
        buttonColor: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
      },
      success: {
        icon: CheckCircle2,
        iconColor: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-50 dark:bg-green-900/20",
        borderColor: "border-green-200 dark:border-green-800",
        textColor: "text-green-800 dark:text-green-300",
        buttonColor: "bg-green-600 hover:bg-green-700 focus:ring-green-500"
      }
    };
    return styles[type] || styles.warning;
  };

  const typeStyles = getTypeStyles();
  const IconComponent = typeStyles.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={handleCancel}
      />
      
      {/* Dialog */}
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl  border border-gray-200 dark:border-gray-700 transform transition-all">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${typeStyles.bgColor} ${typeStyles.borderColor} border`}>
              <IconComponent className={`h-5 w-5 ${typeStyles.iconColor}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              {message && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {message}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleCancel}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Warning/Message section */}
        {warningMessage && (
          <div className={`mx-6 p-4 rounded-xl border ${typeStyles.bgColor} ${typeStyles.borderColor}`}>
            <div className="flex items-start gap-3">
              <IconComponent className={`h-5 w-5 mt-0.5 flex-shrink-0 ${typeStyles.iconColor}`} />
              <p className={`text-sm font-medium ${typeStyles.textColor}`}>
                {warningMessage}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 p-6 pt-6">
          <button
            onClick={handleCancel}
            disabled={isLoading}
            className="px-6 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors disabled:opacity-50"
          >
            {cancelLabel}
          </button>

          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`px-6 py-2.5 text-sm font-semibold text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${typeStyles.buttonColor}`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processing...</span>
              </div>
            ) : (
              confirmLabel
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;