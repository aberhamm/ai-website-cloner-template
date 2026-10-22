/* eslint-disable @next/next/no-img-element -- Preserve the source assets' intrinsic sizing and exact CSS presentation. */
/* Original Folio dashboard markup and local source assets. */
export function ShowcaseModelingPanel() {
 return (<div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0px_2px_6px_0px_rgba(28,40,64,0.06),0px_6px_20px_-2px_rgba(28,40,64,0.08)] sm:rounded-xl dark:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.4),0px_6px_20px_-2px_rgba(0,0,0,0.5)]">
              <div className="relative grid h-[340px] w-full grid-rows-[auto_1fr] sm:h-[420px] md:h-[500px] lg:h-[600px] lg:grid-cols-[272px_1fr] lg:grid-rows-[auto_1fr]">
                <div className="hidden items-center gap-3 border-border border-r border-b bg-card pr-4 pl-3 lg:flex lg:h-12">
                  <img alt="Folio" className="object-contain dark:invert size-6 shrink-0 folio-s0" decoding="async" height="64" loading="lazy" src="/folio/logo.png" width="64" />
                  <div className="flex h-full flex-1 items-center gap-1">
                    <span className="font-semibold text-foreground text-sm leading-5 tracking-[-0.16px]">
{"Folio"}
                    </span>
                    <svg aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground" fill="none" role="presentation" viewBox="0 0 14 14">
                      <path d="M3 5.25L7 9.25L11 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  <svg aria-hidden="true" className="size-[18px] shrink-0 text-foreground opacity-55" fill="none" role="presentation" viewBox="0 0 18 18">
                    <path d="M12.1797 2.5C12.9275 2.5 13.5188 2.49925 13.9941 2.53809C14.4753 2.5774 14.8819 2.6596 15.2529 2.84863C15.8549 3.15542 16.3446 3.64505 16.6514 4.24707C16.8403 4.618 16.9226 5.02485 16.9619 5.50586C17.0007 5.98111 17 6.57268 17 7.32031V10.6797C17 11.4273 17.0007 12.0189 16.9619 12.4941C16.9226 12.9751 16.8404 13.382 16.6514 13.7529C16.3446 14.3549 15.8549 14.8446 15.2529 15.1514C14.882 15.3404 14.4752 15.4226 13.9941 15.4619C13.5188 15.5007 12.9275 15.5 12.1797 15.5L5.82031 15.5C5.07251 15.5 4.48117 15.5007 4.00586 15.4619C3.52479 15.4226 3.11804 15.3404 2.74707 15.1514C2.1451 14.8446 1.65543 14.3549 1.34863 13.7529C1.15964 13.382 1.07741 12.9751 1.03809 12.4941C0.999258 12.0189 1 11.4273 1 10.6797L1 7.32031C1 6.57268 0.999281 5.98111 1.03809 5.50586C1.07739 5.02485 1.1597 4.618 1.34863 4.24707C1.65539 3.64505 2.14507 3.15542 2.74707 2.84863C3.11807 2.6596 3.52474 2.5774 4.00586 2.53809C4.48117 2.49925 5.07249 2.5 5.82031 2.5L12.1797 2.5ZM5.82031 3.5C5.05599 3.5 4.51206 3.50042 4.08691 3.53516C3.66788 3.56943 3.40764 3.63503 3.20117 3.74023C2.78746 3.95113 2.4511 4.28744 2.24023 4.70117C2.13512 4.9076 2.06941 5.16806 2.03516 5.58691C2.00045 6.01201 2 6.55621 2 7.32031L2 10.6797C2 11.4438 2.00043 11.988 2.03516 12.4131C2.06943 12.8319 2.13506 13.0924 2.24023 13.2988C2.45113 13.7125 2.78749 14.0489 3.20117 14.2598C3.40762 14.3649 3.66797 14.4306 4.08691 14.4648C4.51206 14.4996 5.05601 14.5 5.82031 14.5L7 14.5L7 3.5H5.82031ZM8 14.5H12.1797C12.944 14.5 13.4879 14.4996 13.9131 14.4648C14.332 14.4306 14.5924 14.3649 14.7988 14.2598C15.2125 14.0489 15.5489 13.7125 15.7598 13.2988C15.8649 13.0924 15.9306 12.8319 15.9648 12.4131C15.9996 11.988 16 11.4438 16 10.6797L16 7.32031C16 6.55621 15.9995 6.01201 15.9648 5.58691C15.9306 5.16806 15.8649 4.9076 15.7598 4.70117C15.5489 4.28744 15.2125 3.95113 14.7988 3.74023C14.5924 3.63503 14.3321 3.56943 13.9131 3.53516C13.4879 3.50042 12.944 3.5 12.1797 3.5L8 3.5L8 14.5ZM5.3252 7.5C5.60111 7.50026 5.82519 7.72402 5.8252 8C5.8252 8.27598 5.60111 8.49974 5.3252 8.5H3.97559C3.69944 8.5 3.47559 8.27614 3.47559 8C3.47559 7.72386 3.69944 7.5 3.97559 7.5H5.3252ZM5.34961 5.5C5.62575 5.5 5.84961 5.72386 5.84961 6C5.84961 6.27614 5.62575 6.5 5.34961 6.5H4C3.72386 6.5 3.5 6.27614 3.5 6C3.5 5.72386 3.72386 5.5 4 5.5L5.34961 5.5Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="flex w-full items-center border-border border-b">
                  <div className="flex h-full w-full items-center justify-between gap-2 px-3 py-1.5 sm:gap-4 sm:px-4 sm:py-2 lg:gap-8 lg:px-4 lg:py-2.5">
                    <div className="flex min-w-0 flex-1 items-center gap-1 sm:gap-1.5">
                      <span className="truncate font-medium text-[11px] text-foreground leading-4 tracking-[-0.1px] sm:text-sm sm:leading-5 sm:tracking-[-0.14px]">
{"Q3 revenue review"}
                      </span>
                      <svg aria-hidden="true" className="size-3 shrink-0 text-muted-foreground sm:size-3.5" fill="none" height="14" role="presentation" viewBox="0 0 14 14" width="14">
                        <path clipRule="evenodd" d="M7.00002 1.16675C7.18517 1.16675 7.35407 1.27555 7.43078 1.44519L8.88191 4.65489L12.3898 5.09671C12.5733 5.11983 12.7273 5.24732 12.7851 5.42331C12.8428 5.5993 12.7942 5.79287 12.6597 5.92019L10.0542 8.38523L10.7097 11.8616C10.7439 12.0432 10.6706 12.2281 10.5216 12.3369C10.3727 12.4457 10.1739 12.4598 10.0109 12.3734L7.00002 10.7763L3.98916 12.3734C3.82615 12.4598 3.62739 12.4457 3.47841 12.3369C3.32944 12.2281 3.25618 12.0432 3.29035 11.8616L3.94583 8.38523L1.34034 5.92019C1.20584 5.79287 1.15725 5.5993 1.21499 5.42331C1.27274 5.24732 1.42674 5.11983 1.61022 5.09671L5.11813 4.65489L6.56926 1.44519C6.64597 1.27555 6.81487 1.16675 7.00002 1.16675Z" fill="currentColor" fillRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="flex shrink-0 items-center gap-px">
                      <div className="flex size-5 shrink-0 items-center justify-center overflow-clip rounded-lg sm:size-7">
                        <svg aria-hidden="true" className="size-3 text-muted-foreground sm:size-3.5" fill="none" height="14" role="presentation" viewBox="0 0 14 14" width="14">
                          <path d="M7 2C7.27612 2 7.49996 2.22389 7.5 2.5V6.5H11.5C11.7761 6.5 12 6.72386 12 7C12 7.27614 11.7761 7.5 11.5 7.5H7.5V11.5C7.5 11.7761 7.27614 12 7 12C6.72386 12 6.5 11.7761 6.5 11.5V7.5H2.5C2.22386 7.5 2 7.27614 2 7C2 6.72386 2.22386 6.5 2.5 6.5H6.5V2.5C6.50004 2.22389 6.72388 2 7 2Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <div className="flex size-5 shrink-0 items-center justify-center overflow-clip rounded-lg sm:size-7">
                        <svg aria-hidden="true" className="size-3 text-muted-foreground sm:size-3.5" fill="none" height="14" role="presentation" viewBox="0 0 14 14" width="14">
                          <path clipRule="evenodd" d="M2.33325 2.33325C1.96506 2.33325 1.66659 2.63173 1.66659 2.99992V10.9999C1.66659 11.3681 1.96506 11.6666 2.33325 11.6666H11.6666C12.0348 11.6666 12.3333 11.3681 12.3333 10.9999V2.99992C12.3333 2.63173 12.0348 2.33325 11.6666 2.33325H2.33325ZM0.666587 2.99992C0.666587 2.07945 1.41278 1.33325 2.33325 1.33325H11.6666C12.5871 1.33325 13.3333 2.07945 13.3333 2.99992V10.9999C13.3333 11.9204 12.5871 12.6666 11.6666 12.6666H2.33325C1.41278 12.6666 0.666587 11.9204 0.666587 10.9999V2.99992ZM9.33325 2.33325V11.6666H8.33325V2.33325H9.33325Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                      </div>
                      <div className="flex size-5 shrink-0 items-center justify-center overflow-clip rounded-lg sm:size-7">
                        <svg aria-hidden="true" className="size-3 text-muted-foreground sm:size-3.5" fill="none" height="14" role="presentation" viewBox="0 0 14 14" width="14">
                          <path d="M7.438 3.5a.438.438 0 1 1-.876 0 .438.438 0 0 1 .875 0ZM7.438 7a.438.438 0 1 1-.876 0 .438.438 0 0 1 .875 0ZM7.438 10.5a.438.438 0 1 1-.876 0 .438.438 0 0 1 .875 0Z" fill="currentColor" stroke="currentColor" strokeWidth=".7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden flex-col border-border border-r bg-card pb-3 lg:row-span-2 lg:flex">
                  <div className="flex h-12 items-center gap-2 bg-card px-2.5">
                    <div className="flex h-7 flex-1 items-center justify-between gap-1.5 rounded-lg border border-transparent bg-card pr-1 pl-2 text-muted-foreground shadow-[0px_0px_2px_0px_rgba(28,40,64,0.18),0px_1px_3px_0px_rgba(0,0,0,0.04)] dark:border-border dark:bg-muted/30 dark:shadow-none">
                      <div className="flex flex-1 items-center gap-1.5">
                        <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                          <path d="M8.5 0.499756C9.19178 0.499756 9.74066 0.499784 10.1826 0.535889C10.6304 0.572475 11.0127 0.648762 11.3623 0.826904C11.9265 1.11448 12.3853 1.57323 12.6729 2.13745C12.851 2.48707 12.9273 2.86934 12.9639 3.31714C13 3.75909 13 4.30797 13 4.99976V8.99976C13 9.69154 13 10.2404 12.9639 10.6824C12.9273 11.1302 12.851 11.5124 12.6729 11.8621C12.3853 12.4263 11.9265 12.885 11.3623 13.1726C11.0127 13.3507 10.6304 13.427 10.1826 13.4636C9.74066 13.4997 9.19178 13.4998 8.5 13.4998H5.5C4.80822 13.4998 4.25934 13.4997 3.81738 13.4636C3.36958 13.427 2.98732 13.3507 2.6377 13.1726C2.07347 12.885 1.61472 12.4263 1.32715 11.8621C1.14901 11.5125 1.07272 11.1302 1.03613 10.6824C1.00003 10.2404 1 9.69154 1 8.99976V4.99976C1 4.30797 1.00003 3.75909 1.03613 3.31714C1.07272 2.86934 1.14901 2.48707 1.32715 2.13745C1.61472 1.57323 2.07347 1.11448 2.6377 0.826904C2.98732 0.648762 3.36958 0.572475 3.81738 0.535889C4.25934 0.499784 4.80822 0.499756 5.5 0.499756H8.5ZM5.5 1.49976C4.79168 1.49976 4.29023 1.49997 3.89844 1.53198C3.51264 1.56352 3.27691 1.62321 3.0918 1.71753C2.71554 1.90926 2.40951 2.2153 2.21777 2.59155C2.12345 2.77667 2.06377 3.01239 2.03223 3.39819C2.00022 3.78999 2 4.29144 2 4.99976V8.99976C2 9.70807 2.00022 10.2095 2.03223 10.6013C2.06377 10.9871 2.12345 11.2229 2.21777 11.408C2.40951 11.7842 2.71554 12.0903 3.0918 12.282C3.27691 12.3763 3.51264 12.436 3.89844 12.4675C4.29023 12.4995 4.79168 12.4998 5.5 12.4998H8.5C9.20832 12.4998 9.70977 12.4995 10.1016 12.4675C10.4874 12.436 10.7231 12.3763 10.9082 12.282C11.2845 12.0903 11.5905 11.7842 11.7822 11.408C11.8765 11.2229 11.9362 10.9871 11.9678 10.6013C11.9998 10.2095 12 9.70807 12 8.99976V4.99976C12 4.29144 11.9998 3.78999 11.9678 3.39819C11.9362 3.01239 11.8765 2.77667 11.7822 2.59155C11.5905 2.2153 11.2845 1.90926 10.9082 1.71753C10.7231 1.62321 10.4874 1.56352 10.1016 1.53198C9.70977 1.49997 9.20832 1.49976 8.5 1.49976H5.5ZM5.5 2.99976C5.77614 2.99976 6 3.22361 6 3.49976V5.49097L6.19629 5.29175L8.12988 3.16382C8.31553 2.95953 8.63157 2.94414 8.83594 3.12964C9.04022 3.31529 9.05562 3.63133 8.87012 3.83569L7.21973 5.6521L9.37988 8.17456C9.55036 8.46095 9.50872 8.72243 9.3252 8.87964C9.11547 9.05917 8.79973 9.03463 8.62012 8.82495L6.52734 6.38062L6 6.91772V8.49976C6 8.7759 5.77614 8.99976 5.5 8.99976C5.22386 8.99976 5 8.7759 5 8.49976V3.49976C5 3.22361 5.22386 2.99976 5.5 2.99976Z" fill="currentColor"></path>
                        </svg>
                        <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-medium text-foreground text-sm tracking-[-0.28px]">
{"Quick Actions"}
                        </span>
                      </div>
                      <kbd className="flex h-5 min-w-5 items-center justify-center rounded-md border border-border px-1">
                        <span className="text-center font-medium text-[11px] text-muted-foreground">
{"⌘"}
{"K"}
                        </span>
                      </kbd>
                    </div>
                    <div className="flex h-7 w-[53px] items-center justify-between rounded-lg border border-transparent bg-card pr-1 pl-2 text-foreground shadow-[0px_0px_2px_0px_rgba(28,40,64,0.18),0px_1px_3px_0px_rgba(0,0,0,0.04)] dark:border-border dark:bg-muted/30 dark:shadow-none">
                      <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                        <path d="M12.1797 12.313 9.467 9.467M1.313 6.054a4.741 4.741 0 1 1 9.482 0 4.741 4.741 0 0 1-9.482 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"></path>
                      </svg>
                      <kbd className="flex h-5 min-w-5 items-center justify-center rounded-md border border-border px-1">
                        <span className="text-center font-medium text-[11px] text-muted-foreground">
{"/"}
                        </span>
                      </kbd>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-px px-2.5">
                      <ul className="flex flex-col gap-px">
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 transition-colors bg-muted text-foreground">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M5.41699 1.14917C6.33787 0.395804 7.66213 0.395804 8.58301 1.14917L11.8994 3.86304C12.5957 4.43275 12.9999 5.28467 13 6.18433V9.99976C13 11.6566 11.6569 12.9998 10 12.9998H4C2.34315 12.9998 1 11.6566 1 9.99976V6.18433C1.0001 5.28467 1.40429 4.43275 2.10059 3.86304L5.41699 1.14917ZM7.9502 1.92261C7.39768 1.47063 6.60232 1.47063 6.0498 1.92261L2.7334 4.63647C2.26924 5.01626 2.0001 5.5846 2 6.18433V9.99976C2 11.1043 2.89543 11.9998 4 11.9998H10C11.1046 11.9998 12 11.1043 12 9.99976V6.18433C11.9999 5.5846 11.7308 5.01626 11.2666 4.63647L7.9502 1.92261ZM9.5 8.99976C9.77607 8.99976 9.99989 9.22371 10 9.49976C10 9.7759 9.77614 9.99976 9.5 9.99976H4.5C4.22386 9.99976 4 9.7759 4 9.49976C4.00011 9.22371 4.22393 8.99976 4.5 8.99976H9.5Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Home"}
                            </span>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M8.06958 11.8779C8.20948 11.6399 8.51513 11.5604 8.75317 11.7002C8.99086 11.8402 9.07063 12.1459 8.93091 12.3838C8.86917 12.4888 8.79983 12.5894 8.7229 12.6826C8.31268 13.1797 7.69409 13.4999 7.00024 13.5C6.17538 13.5 5.45986 13.0474 5.06958 12.3838C4.92978 12.1458 5.00931 11.8401 5.24731 11.7002C5.48536 11.5604 5.79101 11.6399 5.93091 11.8779C6.15329 12.2558 6.55245 12.5 7.00024 12.5C7.37803 12.4999 7.71968 12.3267 7.95142 12.0459C7.99473 11.9934 8.03469 11.9372 8.06958 11.8779ZM7.00024 0.5C9.4854 0.500145 11.5002 2.51481 11.5002 5V6.22852C11.5002 7.31935 11.8001 8.38961 12.3674 9.32129C12.8154 10.057 12.2863 10.9996 11.425 11H2.57544C1.71403 10.9998 1.18495 10.0571 1.63306 9.32129C2.20037 8.38964 2.50024 7.3193 2.50024 6.22852V5C2.50025 2.51472 4.51496 0.5 7.00024 0.5ZM7.00024 1.5C5.06725 1.5 3.50025 3.067 3.50024 5V6.22852C3.50024 7.50288 3.14942 8.75338 2.48657 9.8418C2.44461 9.91114 2.49439 9.99977 2.57544 10H11.425C11.5059 9.99957 11.5557 9.91105 11.5139 9.8418C10.851 8.75335 10.5002 7.50293 10.5002 6.22852V5C10.5002 3.06709 8.93312 1.50015 7.00024 1.5Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Notifications"}
                            </span>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M10.1548 1.00415C11.7397 1.0847 13.0005 2.3953 13.0005 4.00024V10.0002C13.0005 11.6569 11.6571 13 10.0005 13.0002H4.00049C2.39539 13.0002 1.08472 11.7397 1.00439 10.1545L1.00049 10.0002V4.00024C1.00049 2.34339 2.34363 1.00024 4.00049 1.00024H10.0005L10.1548 1.00415ZM4.00049 2.00024C2.89592 2.00024 2.00049 2.89567 2.00049 4.00024V10.0002L2.01123 10.2043C2.11352 11.213 2.96485 12.0002 4.00049 12.0002H10.0005C11.1048 12 12.0005 11.1047 12.0005 10.0002V4.00024C12.0005 2.96476 11.213 2.11347 10.2046 2.01099L10.0005 2.00024H4.00049ZM9.08447 4.7229C9.23766 4.49318 9.54809 4.43106 9.77783 4.58423C10.0072 4.7375 10.0695 5.04798 9.9165 5.27759L7.48584 8.92407C7.01669 9.6278 5.99786 9.67203 5.46924 9.01196L4.10986 7.31274C3.93736 7.09711 3.97236 6.78212 4.18799 6.60962C4.40361 6.43728 4.71866 6.47217 4.89111 6.68774L6.25049 8.38696C6.35631 8.51853 6.56008 8.50998 6.65381 8.36938L9.08447 4.7229Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Tasks"}
                            </span>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M7.50586 0.499756C7.84892 0.499756 8.10216 0.496957 8.3457 0.55542C8.54966 0.604411 8.74497 0.685086 8.92383 0.794678C9.13728 0.925526 9.31417 1.10689 9.55664 1.34937L11.6504 3.44312C11.8929 3.68558 12.0742 3.86251 12.2051 4.07593C12.3147 4.25475 12.3953 4.45013 12.4443 4.65405C12.5028 4.89756 12.5 5.15091 12.5 5.4939V8.99976C12.5 9.69143 12.5 10.2405 12.4639 10.6824C12.4273 11.1301 12.3509 11.5125 12.1729 11.8621C11.8853 12.4263 11.4265 12.885 10.8623 13.1726C10.5127 13.3507 10.1304 13.427 9.68262 13.4636C9.24066 13.4997 8.69178 13.4998 8 13.4998H6C5.30821 13.4998 4.75933 13.4997 4.31738 13.4636C3.86959 13.427 3.48732 13.3507 3.1377 13.1726C2.57352 12.885 2.1147 12.4263 1.82715 11.8621C1.64909 11.5125 1.57272 11.1302 1.53613 10.6824C1.50004 10.2402 1.5 9.69004 1.5 8.9978V5.00171C1.5 4.30947 1.50003 3.7593 1.53613 3.31714C1.57273 2.86937 1.64906 2.48697 1.82715 2.13745C2.11473 1.57331 2.57353 1.11445 3.1377 0.826904C3.4873 0.648793 3.86962 0.572473 4.31738 0.535889C4.75933 0.499786 5.30823 0.499756 6 0.499756H7.50586ZM6 1.49976C5.2917 1.49976 4.79023 1.49997 4.39844 1.53198C4.01269 1.56352 3.7769 1.62323 3.5918 1.71753C3.2156 1.90923 2.90951 2.21538 2.71777 2.59155C2.62347 2.77664 2.56377 3.01303 2.53223 3.39917C2.50025 3.79115 2.5 4.2932 2.5 5.00171V8.9978C2.5 9.70631 2.50026 10.2083 2.53223 10.6003C2.56376 10.9865 2.6235 11.2229 2.71777 11.408C2.90949 11.7842 3.21559 12.0902 3.5918 12.282C3.7769 12.3763 4.01267 12.436 4.39844 12.4675C4.79023 12.4995 5.29171 12.4998 6 12.4998H8C8.70831 12.4998 9.20977 12.4995 9.60156 12.4675C9.98735 12.436 10.2231 12.3763 10.4082 12.282C10.7844 12.0902 11.0905 11.7842 11.2822 11.408C11.3765 11.2229 11.4362 10.987 11.4678 10.6013C11.4998 10.2096 11.5 9.70795 11.5 8.99976V5.4939C11.5 5.10337 11.4971 4.98914 11.4727 4.88745C11.4482 4.78552 11.4073 4.68777 11.3525 4.59839C11.2979 4.50933 11.2193 4.42606 10.9434 4.15015L8.84961 2.0564C8.57362 1.78041 8.49047 1.70185 8.40137 1.64722C8.31195 1.59243 8.21427 1.55159 8.1123 1.5271C8.01061 1.50269 7.89649 1.49976 7.50586 1.49976H6ZM8 2.49976C8.27608 2.49976 8.49991 2.72369 8.5 2.99976V3.99976C8.5 4.2759 8.72386 4.49976 9 4.49976H10C10.2761 4.49976 10.4999 4.72369 10.5 4.99976C10.5 5.2759 10.2761 5.49976 10 5.49976H9C8.17157 5.49976 7.5 4.82818 7.5 3.99976V2.99976C7.50009 2.72369 7.72392 2.49976 8 2.49976Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Notes"}
                            </span>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M9 1.5C9.69178 1.5 10.2407 1.50003 10.6826 1.53613C11.1304 1.57272 11.5127 1.64901 11.8623 1.82715C12.4265 2.11472 12.8853 2.57347 13.1729 3.1377C13.351 3.48732 13.4273 3.86958 13.4639 4.31738C13.5 4.75934 13.5 5.30822 13.5 6V8C13.5 8.69178 13.5 9.24066 13.4639 9.68262C13.4273 10.1304 13.351 10.5127 13.1729 10.8623C12.8853 11.4265 12.4265 11.8853 11.8623 12.1729C11.5127 12.351 11.1304 12.4273 10.6826 12.4639C10.2407 12.5 9.69178 12.5 9 12.5H5C4.30822 12.5 3.75934 12.5 3.31738 12.4639C2.86958 12.4273 2.48732 12.351 2.1377 12.1729C1.57347 11.8853 1.11472 11.4265 0.827148 10.8623C0.649006 10.5127 0.57272 10.1304 0.536133 9.68262C0.500028 9.24066 0.5 8.69178 0.5 8V6C0.5 5.30822 0.500028 4.75934 0.536133 4.31738C0.57272 3.86958 0.649006 3.48732 0.827148 3.1377C1.11472 2.57347 1.57347 2.11472 2.1377 1.82715C2.48732 1.64901 2.86958 1.57272 3.31738 1.53613C3.75934 1.50003 4.30822 1.5 5 1.5H9ZM10.6504 4.64258C10.8478 4.4495 11.1643 4.45301 11.3574 4.65039C11.5505 4.84779 11.547 5.16432 11.3496 5.35742L10.5977 6.09277C9.82132 6.85226 9.20351 7.4581 8.65625 7.86621C8.09738 8.28296 7.55259 8.54027 6.91602 8.5332C6.27959 8.52603 5.7408 8.25712 5.19141 7.82812C4.65334 7.40797 4.04933 6.78824 3.29004 6.01172L2.64258 5.34961C2.47349 5.17253 2.47523 4.89824 2.64648 4.72302C2.82331 4.55349 3.0876 4.55523 3.25684 4.72648C3.27179 4.74131 3.31494 4.78539 3.35742 4.82849L4.00488 5.4902C4.7839 6.2869 5.3339 6.84858 5.80664 7.21774C6.26796 7.57796 6.59773 7.70724 6.92773 7.7109C7.25766 7.71451 7.5895 7.59197 8.05859 7.24215C8.53941 6.88358 9.10193 6.33485 9.89844 5.55563L10.6504 4.64258Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Emails"}
                            </span>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M7 1.5C7.44539 1.5 7.72673 1.49862 7.96973 1.53711C9.25304 1.74056 10.2594 2.74697 10.4629 4.03027C10.4714 4.0841 10.4774 4.1403 10.4824 4.19922L11.1553 3.86328C11.4148 3.73349 11.6403 3.62024 11.8281 3.54688C12.0153 3.47378 12.2363 3.40997 12.4756 3.44531C12.8019 3.49357 13.094 3.67411 13.2832 3.94434C13.4218 4.14253 13.4641 4.36928 13.4824 4.56934C13.5008 4.77004 13.5 5.02245 13.5 5.3125V8.6875C13.5 8.9776 13.5008 9.22994 13.4824 9.43066C13.4641 9.63066 13.4217 9.85653 13.2832 10.0547C13.0941 10.3251 12.8021 10.5064 12.4756 10.5547C12.2363 10.59 12.0153 10.5262 11.8281 10.4531C11.6404 10.3798 11.4148 10.2665 11.1553 10.1367L10.4824 9.7998C10.4774 9.85908 10.4715 9.91561 10.4629 9.96973C10.2594 11.253 9.25305 12.2594 7.96973 12.4629C7.72673 12.5014 7.4454 12.5 7 12.5H5C4.30822 12.5 3.75934 12.5 3.31738 12.4639C2.86958 12.4273 2.48732 12.351 2.1377 12.1729C1.57348 11.8853 1.11472 11.4265 0.827148 10.8623C0.649016 10.5127 0.572719 10.1304 0.536133 9.68262C0.500031 9.24067 0.5 8.69177 0.5 8V6C0.5 5.30823 0.500028 4.75933 0.536133 4.31738C0.572721 3.8696 0.649011 3.48731 0.827148 3.1377C1.11472 2.57348 1.57348 2.11472 2.1377 1.82715C2.48732 1.64901 2.86959 1.57272 3.31738 1.53613C3.75934 1.50003 4.30822 1.5 5 1.5H7Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Calls"}
                            </span>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M8.5 1C9.19178 1 9.74066 1.00003 10.1826 1.03613C10.6304 1.07272 11.0127 1.14901 11.3623 1.32715C11.9265 1.61472 12.3853 2.07347 12.6729 2.6377C12.851 2.98732 12.9273 3.36958 12.9639 3.81738C13 4.25934 13 4.80822 13 5.5V8.5C13 9.19178 13 9.74066 12.9639 10.1826C12.9273 10.6304 12.851 11.0127 12.6729 11.3623C12.3853 11.9265 11.9265 12.3853 11.3623 12.6729C11.0127 12.851 10.6304 12.9273 10.1826 12.9639C9.74066 13 9.19178 13 8.5 13H5.5C4.80822 13 4.25934 13 3.81738 12.9639C3.36958 12.9273 2.98732 12.851 2.6377 12.6729C2.07347 12.3853 1.61472 11.9265 1.32715 11.3623C1.14901 11.0127 1.07272 10.6304 1.03613 10.1826C1.00003 9.74066 1 9.19178 1 8.5V5.5C1 4.80822 1.00003 4.25934 1.03613 3.81738C1.07272 3.36958 1.14901 2.98732 1.32715 2.6377C1.61472 2.07347 2.07347 1.61472 2.6377 1.32715C2.98732 1.14901 3.36958 1.07272 3.81738 1.03613C4.25934 1.00003 4.80822 1 5.5 1H8.5ZM4.5 5C4.22386 5 4 5.22386 4 5.5V9.5C4 9.77614 4.22386 10 4.5 10C4.77614 10 5 9.77614 5 9.5V5.5C5 5.22386 4.77614 5 4.5 5ZM7 3.96191C6.72386 3.96191 6.5 4.18577 6.5 4.46191V9.5C6.50026 9.77592 6.72402 10 7 10C7.27598 10 7.49974 9.77592 7.5 9.5V4.46191C7.5 4.18577 7.27614 3.96191 7 3.96191ZM9.5 7C9.22386 7 9 7.22386 9 7.5V9.5C9 9.77614 9.22386 10 9.5 10C9.77614 10 10 9.77614 10 9.5V7.5C10 7.22386 9.77614 7 9.5 7Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Reports"}
                            </span>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M3.80469 1.13867C4.18661 1.10126 4.55892 1.2251 4.93945 1.40527C5.32254 1.58669 5.79059 1.86365 6.375 2.20898L10.2578 4.50293C10.8248 4.83799 11.2802 5.10682 11.6152 5.34863C11.9487 5.5893 12.23 5.8495 12.3818 6.19434C12.6078 6.7077 12.6078 7.2923 12.3818 7.80566C12.23 8.15046 11.9487 8.41071 11.6152 8.65137C11.2802 8.89318 10.8248 9.16201 10.2578 9.49707L6.375 11.791C5.79059 12.1363 5.32253 12.4133 4.93945 12.5947C4.55894 12.7749 4.1866 12.8987 3.80469 12.8613C3.23797 12.8057 2.72189 12.5114 2.38574 12.0518C2.15925 11.742 2.07656 11.3587 2.03809 10.9395C1.99936 10.5173 2 9.97299 2 9.29395V4.70605C2 4.02701 1.99937 3.48274 2.03809 3.06055C2.07655 2.64131 2.15927 2.25801 2.38574 1.94824C2.72189 1.48856 3.23795 1.1943 3.80469 1.13867Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Automations"}
                            </span>
                            <svg aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="m4 5.5 3 3 3-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"></path>
                            </svg>
                          </div>
                          <div className="flex flex-col gap-y-px py-px">
                            <div className="relative flex pl-4">
                              <div className="-translate-y-[2px] absolute left-3.5 h-[29px] w-px bg-border opacity-60"></div>
                              <div className="flex w-full flex-col">
                                <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                                  <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                                    <g clipPath="url(#seq-clip)">
                                      <path d="M0.909424 2.94067C0.263132 1.64598 1.64375 0.276495 2.93286 0.933838L12.2278 5.67407C13.3192 6.23124 13.3181 7.79126 12.2258 8.34692L2.93384 13.0706C1.64391 13.726 0.265383 12.3546 0.91333 11.0608L2.94067 7.01001L0.909424 2.94067ZM3.8147 7.50024L1.80688 11.509C1.591 11.9403 2.05078 12.3974 2.48071 12.179L11.6858 7.50024H3.8147ZM2.47876 1.82544C2.04917 1.60638 1.58895 2.06195 1.80396 2.49341L3.80396 6.50024H11.6477L2.47876 1.82544Z" fill="currentColor"></path>
                                    </g>
                                    <defs>
                                      <clipPath id="seq-clip">
                                        <rect fill="white" height="14" width="14"></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Sequences"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="relative flex pl-4">
                              <div className="-translate-y-[2px] absolute left-3.5 h-[29px] w-px bg-border opacity-60"></div>
                              <div className="flex w-full flex-col">
                                <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                                  <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                                    <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.1">
                                      <rect height="4.5" rx="1.5" strokeLinejoin="round" width="4.5" x="1.5" y="1.5"></rect>
                                      <rect height="4.5" rx="2.25" strokeLinejoin="round" width="4.5" x="8" y="8"></rect>
                                      <path d="M2.5 8v1A2.5 2.5 0 0 0 5 11.5h1M11.5 6V5A2.5 2.5 0 0 0 9 2.5H8"></path>
                                    </g>
                                  </svg>
                                  <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Workflows"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-px px-2.5">
                      <div className="flex h-7 items-center gap-1.5 overflow-clip pl-2">
                        <svg aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground" fill="none" role="presentation" viewBox="0 0 14 14">
                          <path d="m4 5.5 3 3 3-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"></path>
                        </svg>
                        <span className="font-medium text-muted-foreground text-xs tracking-[-0.12px]">
{"Favorites"}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-px">
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M4.33691 1.00049C4.55752 1.00049 4.74968 0.996967 4.93555 1.0415C5.0884 1.07821 5.23508 1.1391 5.36914 1.22119C5.53217 1.32114 5.6662 1.45966 5.82227 1.61572L6.88477 2.67822C7.07437 2.86783 7.11461 2.90353 7.15332 2.92725C7.19789 2.95447 7.24707 2.97462 7.29785 2.98682C7.34192 2.99733 7.3956 3.00049 7.66309 3.00049H10.5C11.7371 3.00048 12.7616 3.89952 12.9619 5.07959C13.0685 5.10849 13.1731 5.14938 13.2734 5.2085C13.5822 5.3905 13.8159 5.67687 13.9316 6.01611C14.0104 6.24727 14.0081 6.48066 13.9814 6.7085C13.9552 6.93225 13.8983 7.20544 13.832 7.52588L13.6494 8.41162C13.5335 8.97265 13.4413 9.42063 13.3389 9.77979C13.2347 10.1449 13.1106 10.4529 12.916 10.729C12.5991 11.1784 12.1644 11.5322 11.6602 11.7515C11.3502 11.8862 11.0234 11.9451 10.6445 11.9731C10.272 12.0007 9.81517 12.0005 9.24219 12.0005H3C1.61942 12.0005 0.500219 10.881 0.5 9.50049V4.70068C0.5 4.14909 0.500032 3.70471 0.529297 3.34619C0.559055 2.98198 0.621753 2.66172 0.772461 2.36572C1.01212 1.89537 1.3949 1.51264 1.86523 1.27295C2.16132 1.12213 2.48137 1.05956 2.8457 1.02979C3.20429 1.00049 3.64839 1.00049 4.2002 1.00049H4.33691Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"PQL workflows"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-y-px py-px">
                            <div className="relative flex pl-4">
                              <div className="flex w-full flex-col">
                                <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                                  <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                                    <rect height="5.5" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="1.75" y="1.75"></rect>
                                    <rect height="3" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="1.75" y="9.25"></rect>
                                    <rect height="3" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="8.05" y="1.65"></rect>
                                    <rect height="5.5" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="8.05" y="6.75"></rect>
                                  </svg>
                                  <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"PQL Pipeline Deals"}
                                  </span>
                                  <span className="font-medium text-muted-foreground text-sm tracking-[-0.28px]">
{"Deals"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="relative flex pl-4">
                              <div className="flex w-full flex-col">
                                <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                                  <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                                    <g clipPath="url(#seq-clip)">
                                      <path d="M0.909424 2.94067C0.263132 1.64598 1.64375 0.276495 2.93286 0.933838L12.2278 5.67407C13.3192 6.23124 13.3181 7.79126 12.2258 8.34692L2.93384 13.0706C1.64391 13.726 0.265383 12.3546 0.91333 11.0608L2.94067 7.01001L0.909424 2.94067ZM3.8147 7.50024L1.80688 11.509C1.591 11.9403 2.05078 12.3974 2.48071 12.179L11.6858 7.50024H3.8147ZM2.47876 1.82544C2.04917 1.60638 1.58895 2.06195 1.80396 2.49341L3.80396 6.50024H11.6477L2.47876 1.82544Z" fill="currentColor"></path>
                                    </g>
                                    <defs>
                                      <clipPath id="seq-clip">
                                        <rect fill="white" height="14" width="14"></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"PQL Workspace Outreach"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="relative flex pl-4">
                              <div className="flex w-full flex-col">
                                <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                                  <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                                    <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.1">
                                      <rect height="4.5" rx="1.5" strokeLinejoin="round" width="4.5" x="1.5" y="1.5"></rect>
                                      <rect height="4.5" rx="2.25" strokeLinejoin="round" width="4.5" x="8" y="8"></rect>
                                      <path d="M2.5 8v1A2.5 2.5 0 0 0 5 11.5h1M11.5 6V5A2.5 2.5 0 0 0 9 2.5H8"></path>
                                    </g>
                                  </svg>
                                  <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"PQL Triage"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M4.33691 1.00049C4.55752 1.00049 4.74968 0.996967 4.93555 1.0415C5.0884 1.07821 5.23508 1.1391 5.36914 1.22119C5.53217 1.32114 5.6662 1.45966 5.82227 1.61572L6.88477 2.67822C7.07437 2.86783 7.11461 2.90353 7.15332 2.92725C7.19789 2.95447 7.24707 2.97462 7.29785 2.98682C7.34192 2.99733 7.3956 3.00049 7.66309 3.00049H10.5C11.7371 3.00048 12.7616 3.89952 12.9619 5.07959C13.0685 5.10849 13.1731 5.14938 13.2734 5.2085C13.5822 5.3905 13.8159 5.67687 13.9316 6.01611C14.0104 6.24727 14.0081 6.48066 13.9814 6.7085C13.9552 6.93225 13.8983 7.20544 13.832 7.52588L13.6494 8.41162C13.5335 8.97265 13.4413 9.42063 13.3389 9.77979C13.2347 10.1449 13.1106 10.4529 12.916 10.729C12.5991 11.1784 12.1644 11.5322 11.6602 11.7515C11.3502 11.8862 11.0234 11.9451 10.6445 11.9731C10.272 12.0007 9.81517 12.0005 9.24219 12.0005H3C1.61942 12.0005 0.500219 10.881 0.5 9.50049V4.70068C0.5 4.14909 0.500032 3.70471 0.529297 3.34619C0.559055 2.98198 0.621753 2.66172 0.772461 2.36572C1.01212 1.89537 1.3949 1.51264 1.86523 1.27295C2.16132 1.12213 2.48137 1.05956 2.8457 1.02979C3.20429 1.00049 3.64839 1.00049 4.2002 1.00049H4.33691Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Reports"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-y-px py-px">
                            <div className="relative flex pl-4">
                              <div className="flex w-full flex-col">
                                <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                                  <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                                    <rect height="5.5" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="1.75" y="1.75"></rect>
                                    <rect height="3" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="1.75" y="9.25"></rect>
                                    <rect height="3" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="8.05" y="1.65"></rect>
                                    <rect height="5.5" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="8.05" y="6.75"></rect>
                                  </svg>
                                  <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Revenue"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="relative flex pl-4">
                              <div className="flex w-full flex-col">
                                <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground">
                                  <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                                    <rect height="5.5" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="1.75" y="1.75"></rect>
                                    <rect height="3" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="1.75" y="9.25"></rect>
                                    <rect height="3" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="8.05" y="1.65"></rect>
                                    <rect height="5.5" rx="1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" width="4.2" x="8.05" y="6.75"></rect>
                                  </svg>
                                  <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Attribution"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2 text-muted-foreground transition-colors">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M4.58594 1C4.98369 1.00004 5.36522 1.1582 5.64648 1.43945L7.06055 2.85352C7.15427 2.94724 7.28152 2.99995 7.41406 3H10.5C12.1568 3 13.5 4.34316 13.5 6V9.5C13.5 11.1569 12.1569 12.5 10.5 12.5H3.5C1.84316 12.5 0.5 11.1568 0.5 9.5V4C0.500016 2.34317 1.84317 1.00002 3.5 1H4.58594ZM3.5 2C2.39545 2.00002 1.50002 2.89545 1.5 4V9.5C1.5 10.6046 2.39544 11.5 3.5 11.5H10.5C11.6046 11.5 12.5 10.6046 12.5 9.5V6C12.5 4.89544 11.6046 4 10.5 4H7.41406C7.0163 3.99995 6.63478 3.84181 6.35352 3.56055L4.93945 2.14648C4.84572 2.05277 4.71848 2.00004 4.58594 2H3.5Z" fill="currentColor"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Upcoming calls"}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-px px-2.5">
                      <div className="flex h-7 items-center gap-1.5 overflow-clip pl-2">
                        <svg aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground" fill="none" role="presentation" viewBox="0 0 14 14">
                          <path d="m4 5.5 3 3 3-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"></path>
                        </svg>
                        <span className="font-medium text-muted-foreground text-xs tracking-[-0.12px]">
{"Records"}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-px">
                        <li className="flex w-full flex-col">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path clipRule="evenodd" d="M0 5.6c0-1.96 0-2.94.381-3.689a3.5 3.5 0 0 1 1.53-1.53C2.66 0 3.64 0 5.6 0h2.8c1.96 0 2.94 0 3.689.381a3.5 3.5 0 0 1 1.53 1.53C14 2.66 14 3.64 14 5.6v2.8c0 1.96 0 2.94-.382 3.689a3.5 3.5 0 0 1-1.529 1.53C11.34 14 10.36 14 8.4 14H5.6c-1.96 0-2.94 0-3.689-.382a3.5 3.5 0 0 1-1.53-1.529C0 11.34 0 10.36 0 8.4V5.6Zm4.308 5.708h5.384c.595 0 1.077-.482 1.077-1.077a2.585 2.585 0 0 0-2.584-2.585h-2.37a2.585 2.585 0 0 0-2.584 2.585c0 .595.482 1.077 1.077 1.077ZM7 6.618a1.963 1.963 0 1 0 0-3.926 1.963 1.963 0 0 0 0 3.926Z" fill="#17BDE9" fillRule="evenodd"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"People"}
                            </span>
                          </div>
                        </li>
                        <li className="flex w-full flex-col opacity-50">
                          <div className="flex h-7 items-center gap-1.5 rounded-lg px-2">
                            <svg aria-hidden="true" className="size-3.5 shrink-0" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path clipRule="evenodd" d="M.381 1.911C0 2.66 0 3.64 0 5.6v2.8c0 1.96 0 2.94.381 3.689a3.5 3.5 0 0 0 1.53 1.53C2.66 14 3.64 14 5.6 14h2.8c1.96 0 2.94 0 3.689-.382a3.5 3.5 0 0 0 1.53-1.529C14 11.34 14 10.36 14 8.4V5.6c0-1.96 0-2.94-.382-3.689A3.5 3.5 0 0 0 12.09.381C11.34 0 10.36 0 8.4 0H5.6C3.64 0 2.66 0 1.911.381a3.5 3.5 0 0 0-1.53 1.53Zm2.85 4.228V7.86c0 1.207 0 1.81.235 2.27.206.406.536.735.94.942.308.156.678.209 1.248.226V10.5c0-.452 0-.678.083-.853a.862.862 0 0 1 .41-.41c.175-.083.4-.083.853-.083.452 0 .678 0 .853.083.18.085.325.23.41.41.083.175.083.4.083.853v.799c.57-.017.94-.07 1.247-.226.405-.207.735-.536.941-.941.235-.461.235-1.064.235-2.27V6.138c0-1.206 0-1.809-.235-2.27a2.154 2.154 0 0 0-.94-.94c-.462-.236-1.065-.236-2.27-.236h-.647c-1.206 0-1.81 0-2.27.235a2.154 2.154 0 0 0-.941.941c-.235.461-.235 1.064-.235 2.27Zm1.137-1.436c0-.298.24-.539.538-.539h2.848a.538.538 0 0 1 0 1.077H4.906a.538.538 0 0 1-.538-.538Zm1.878 1.472a.538.538 0 1 0 0 1.077h2.848a.538.538 0 1 0 0-1.077H6.246Z" fill="#266DF0" fillRule="evenodd"></path>
                            </svg>
                            <span className="font-medium text-foreground text-sm tracking-[-0.28px]">
{"Companies"}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex h-full w-full flex-col overflow-hidden bg-card">
                  <div className="flex shrink-0 items-center justify-between border-border border-b px-2 py-1 sm:px-3 sm:py-2 lg:px-4">
                    <button className="flex items-center gap-1 font-semibold text-[11px] text-foreground leading-4 sm:text-sm sm:leading-5" type="button">
{"Stock Analysis"}
                      <svg aria-hidden="true" className="size-3.5 text-muted-foreground" fill="none" role="presentation" viewBox="0 0 16 16">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      </svg>
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 rounded-md border border-border px-2 py-1 font-medium text-[11px] text-foreground lg:text-xs" type="button">
{"Query builder"}
                      </button>
                      <button className="flex items-center gap-1 rounded-md border border-border px-2 py-1 font-medium text-[11px] text-foreground lg:text-xs" type="button">
{"Export CSV"}
                      </button>
                    </div>
                  </div>
                  <div className="hidden shrink-0 items-center gap-2 border-border border-b px-3 py-1.5 sm:flex lg:px-4">
                    <span className="flex items-center gap-1 rounded-md border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
                      <svg aria-hidden="true" className="size-3.5" fill="none" role="presentation" viewBox="0 0 14 14">
                        <path d="M3 5l4-3 4 3M3 9l4 3 4-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
                      </svg>
{"Sorted by Market cap"}
                    </span>
                    <span className="flex items-center gap-1 rounded-md border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Sector filter 5"}
                      <button className="text-muted-foreground hover:text-foreground" type="button">
                        <svg aria-hidden="true" className="size-4" fill="none" role="presentation" viewBox="0 0 16 16">
                          <circle cx="4" cy="8" fill="currentColor" r="1.2"></circle>
                          <circle cx="8" cy="8" fill="currentColor" r="1.2"></circle>
                          <circle cx="12" cy="8" fill="currentColor" r="1.2"></circle>
                        </svg>
                      </button>
                    </span>
                    <button className="flex items-center gap-1 rounded-md border border-border border-dashed px-2 py-0.5 font-medium text-[11px] text-muted-foreground lg:text-xs" type="button">
                      <svg aria-hidden="true" className="size-3.5" fill="none" role="presentation" viewBox="0 0 14 14">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="scrollbar-none flex-1 overflow-x-auto overflow-y-auto">
                    <div className="grid min-w-[640px] auto-rows-[24px] grid-cols-[120px_minmax(80px,1fr)_minmax(120px,1.5fr)_minmax(80px,1fr)_120px_120px] sm:auto-rows-[28px] md:auto-rows-[32px] lg:min-w-0 lg:auto-rows-[36px] lg:grid-cols-[204px_minmax(136px,1fr)_minmax(204px,1.5fr)_minmax(136px,1fr)_204px_204px]">
                      <div className="flex items-center gap-1 px-2 font-medium text-[11px] text-muted-foreground lg:px-3 lg:text-xs border-border border-r border-b">
                        <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                        <span className="ml-1">
{"Ticker"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-2 font-medium text-[11px] text-muted-foreground lg:px-3 lg:text-xs border-border border-r border-b">
{"Sector"}
                      </div>
                      <div className="flex items-center gap-1 px-2 font-medium text-[11px] text-muted-foreground lg:px-3 lg:text-xs border-border border-r border-b">
{"Recent queries"}
                      </div>
                      <div className="flex items-center gap-1 px-2 font-medium text-[11px] text-muted-foreground lg:px-3 lg:text-xs border-border border-r border-b">
{"Sentiment "}
                        <span className="ml-1 inline-flex items-center rounded-[4px] border border-border bg-muted px-1 py-px font-medium text-[10px] text-muted-foreground leading-none lg:text-[10px]">
{"AI"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-2 font-medium text-[11px] text-muted-foreground lg:px-3 lg:text-xs border-border border-r border-b">
{"Market Cap "}
                        <span className="ml-1 inline-flex items-center rounded-[4px] border border-border bg-muted px-1 py-px font-medium text-[10px] text-muted-foreground leading-none lg:text-[10px]">
{"AI"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-2 font-medium text-[11px] text-muted-foreground lg:px-3 lg:text-xs border-border border-b">
{"Signal"}
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-black">
{"A"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"AAPL"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Technology"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Revenue Trend"}
                          </span>
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"EPS Forecast"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#EDE5FE] bg-[#F8F5FF] text-[#6B3FA0] dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-300">
{"$3.07T"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="text-emerald-500">
                            <svg aria-hidden="true" className="size-3.5" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M7.5 1L3 8h4l-1 5 5-7H7l.5-5z" fill="currentColor"></path>
                            </svg>
                          </span>
{"Strong Buy"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-blue-600">
{"M"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"MSFT"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Technology"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Azure Growth"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#EDE5FE] bg-[#F8F5FF] text-[#6B3FA0] dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-300">
{"$2.89T"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-red-500">
{"G"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"GOOGL"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Communication"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Ad Revenue Q3"}
                          </span>
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Cloud Margins"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#DEEAFF] bg-[#EEF3FF] text-[#2D5BB2] dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
{"Neutral"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"$1.92T"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-blue-500"></span>
{"Neutral"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-orange-500">
{"A"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"AMZN"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Consumer Cyclical"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"AWS Margins"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"$1.87T"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-emerald-600">
{"N"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"NVDA"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Semiconductors"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"GPU Demand"}
                          </span>
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"AI Revenue"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"$1.78T"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="text-emerald-500">
                            <svg aria-hidden="true" className="size-3.5" fill="none" role="presentation" viewBox="0 0 14 14">
                              <path d="M7.5 1L3 8h4l-1 5 5-7H7l.5-5z" fill="currentColor"></path>
                            </svg>
                          </span>
{"Strong Buy"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-red-600">
{"T"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"TSLA"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Automotive"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Delivery Numbers"}
                          </span>
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Margin Pressure"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#FFE8D4] bg-[#FFF4EB] text-[#9A5A1A] dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300">
{"Bearish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D1F0F9] bg-[#E8F7FC] text-[#1A7A8A] dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
{"$785B"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-orange-400"></span>
{"Bearish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-blue-500">
{"M"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"META"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Technology"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Metaverse Spend"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#DEEAFF] bg-[#EEF3FF] text-[#2D5BB2] dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
{"Neutral"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"$1.24T"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-blue-500"></span>
{"Neutral"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-blue-800">
{"J"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"JPM"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Financial"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Net Interest Income"}
                          </span>
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Credit Risk"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D1F0F9] bg-[#E8F7FC] text-[#1A7A8A] dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
{"$574B"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-indigo-600">
{"V"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"V"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Financial"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Payment Volume"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D1F0F9] bg-[#E8F7FC] text-[#1A7A8A] dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
{"$521B"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-red-700">
{"J"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"JNJ"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Healthcare"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Pipeline Analysis"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#DEEAFF] bg-[#EEF3FF] text-[#2D5BB2] dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
{"Neutral"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#FFEEBD] bg-[#FFF8E0] text-[#8A6A00] dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
{"$382B"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-blue-500"></span>
{"Neutral"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-blue-700">
{"W"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"WMT"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Consumer Staples"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Same-Store Sales"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#FFEEBD] bg-[#FFF8E0] text-[#8A6A00] dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
{"$438B"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-blue-400">
{"D"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"DIS"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Entertainment"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Streaming Subs"}
                          </span>
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"Parks Revenue"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#FFE8D4] bg-[#FFF4EB] text-[#9A5A1A] dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300">
{"Bearish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#FFE8D4] bg-[#FFF4EB] text-[#9A5A1A] dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-300">
{"$168B"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-orange-400"></span>
{"Bearish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-md border border-border bg-card"></span>
                          <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] font-bold text-[8px] text-white bg-sky-500">
{"C"}
                          </span>
                          <span className="truncate font-medium text-[11px] text-foreground underline decoration-border underline-offset-2 lg:text-sm">
{"CRM"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-lg border border-[#B8D0FF] bg-card px-2 py-0.5 font-medium text-[#407FF2] text-[11px] leading-none lg:text-xs dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                          <span className="truncate">
{"Technology"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="flex items-center gap-1 overflow-hidden">
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"ARR Growth"}
                          </span>
                          <span className="shrink-0 truncate rounded-lg border border-border bg-muted px-2 py-0.5 font-medium text-[11px] text-foreground lg:text-xs">
{"AI Integration"}
                          </span>
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#D4F4DC] bg-[#EDFAF0] text-[#1A7A4C] dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b bg-muted/40">
                        <span className="inline-flex items-center rounded-lg border px-2 py-0.5 font-medium text-[11px] leading-none lg:text-xs border-[#FFEEBD] bg-[#FFF8E0] text-[#8A6A00] dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
{"$246B"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground lg:text-xs">
                          <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
{"Bullish"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="font-medium text-[11px] text-muted-foreground lg:text-xs">
{"2,847 records"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="text-[11px] text-muted-foreground lg:text-xs">
{"Add calculation"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="text-[11px] text-muted-foreground lg:text-xs">
{"Add calculation"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="text-[11px] text-muted-foreground lg:text-xs">
{"Add calculation"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-r border-b ">
                        <span className="text-[11px] text-muted-foreground lg:text-xs">
{"Add calculation"}
                        </span>
                      </div>
                      <div className="flex min-w-0 items-center overflow-hidden px-2 text-[11px] text-foreground lg:px-3 lg:text-sm border-border border-b ">
                        <span className="text-[11px] text-muted-foreground lg:text-xs">
{"Add calculation"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>);
}
