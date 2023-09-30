import React from "react";

export default function TermsOfService() {
  return (
    <div className="container p-10 px-20 mx-auto">
      <h1 className="mb-4 text-4xl font-bold text-center">Terms of Service</h1>

      <p className="mb-4 ">
        These terms of service ("Terms") govern your use of the HeavenHunter
        website and services (the "Service") operated by Company Co. ("us,"
        "we," or "our").
      </p>

      <p className="mb-4">
        Please read these Terms carefully before using our Service. By accessing
        or using the Service, you agree to be bound by these Terms. If you
        disagree with any part of the terms, then you may not access the
        Service.
      </p>

      <h2 className="mb-2 text-xl font-semibold">1. Use License</h2>

      <p className="mb-4">
        Permission is granted to temporarily download one copy of the materials
        (information or software) on Company Co.'s website for personal,
        non-commercial transitory viewing only. This is the grant of a license,
        not a transfer of title, and under this license, you may not:
      </p>

      <ul className="pl-6 mb-4 list-disc">
        <li>modify or copy the materials;</li>
        <li>
          use the materials for any commercial purpose or for any public
          display;
        </li>
        <li>
          attempt to decompile or reverse engineer any software contained on
          Company Co.'s website;
        </li>
        <li>
          remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li>
          transfer the materials to another person or "mirror" the materials on
          any other server.
        </li>
      </ul>

      <p className="mb-4">
        This license shall automatically terminate if you violate any of these
        restrictions and may be terminated by Company Co. at any time. Upon
        terminating your viewing of these materials or upon the termination of
        this license, you must destroy any downloaded materials in your
        possession whether in electronic or printed format.
      </p>

      {/* Add more sections and content as needed */}
    </div>
  );
}
