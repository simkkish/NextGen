interface PolicyModalProps {
    isOpen: boolean;
    selectedTab: "privacy" | "terms" | null;
    onClose: () => void;
}

export default function PolicyModal({
                                        isOpen,
                                        selectedTab,
                                        onClose,
                                    }: PolicyModalProps) {
    if (!isOpen || !selectedTab) return null;

    const content = {
        privacy: {
            title: "Privacy Policy",
            body: (
                <>
                    <p>
                        We collect and use your data to provide and improve our services. This includes
                        basic identifiers, device info, and usage data. We do not sell your information.
                    </p>
                    <p>
                        Your data is protected through encryption and standard security practices.
                        You can request deletion or correction of your data at any time.
                    </p>
                </>
            ),
        },
        terms: {
            title: "Terms & Conditions",
            body: (
                <>
                    <p>
                        By using this application, you agree to comply with our rules and policies. Any
                        misuse, including unauthorized access or data scraping, may result in termination.
                    </p>
                    <p>
                        All intellectual property belongs to the company. Continued use of the service
                        signifies your acceptance of these terms.
                    </p>
                </>
            ),
        },
    };

    const { title, body } = content[selectedTab];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-lg w-full p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
                    >
                        &times;
                    </button>
                </div>

                <div className="space-y-4 max-h-[300px] overflow-y-auto text-sm">
                    {body}
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
