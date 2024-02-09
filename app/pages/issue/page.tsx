import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
const Issuepage = () => {
  return (
    <div>
      <h1>This is issue page</h1>

      <Button>
        <Link href="/pages/issue/newIssue">New Issue</Link>
      </Button>
    </div>
  );
};

export default Issuepage;
