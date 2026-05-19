# Component Counts Report

This report lists the count of common and custom components used in each screen across all Scout workflows.
Definitions:
- **Common**: Used across 2 or more screens in one or more workflows.
- **Custom**: Exclusive to exactly 1 screen across all workflows.

## Workflow: dashboard.html
- **Screen 1: Today's Task List**: common = 5, custom = 5 (Custom: MapToggleButton, SkeletalLoader, TaskCard, TaskListContainer, TaskSearchBar)
- **Screen 2: Overdue Tasks Screen**: common = 6, custom = 2 (Custom: AcknowledgeSheet, OverdueTaskCard)
- **Screen 3: Notifications Center**: common = 3, custom = 4 (Custom: NotificationCard, NotificationTabs, Older, Yesterday)
## Workflow: farmer_registration.html
- **Intro & Consent**: common = 5, custom = 2 (Custom: HeroImage, ProcessCard)
- **Mobile Verification (OTP Send & Verify)**: common = 9, custom = 1 (Custom: OTPInputGroup)
- **Farmer Identity Details**: common = 9, custom = 0
- **Language Selection**: common = 6, custom = 1 (Custom: LanguageTiles)
- **Address Details**: common = 9, custom = 0
- **First Pond Details**: common = 9, custom = 0
- **First Pond Legal Documents**: common = 10, custom = 0
- **First Pond Address**: common = 10, custom = 0
- **First Pond Geo-Fencing**: common = 6, custom = 1 (Custom: Continue)
- **Bank Account Details**: common = 8, custom = 1 (Custom: PremiumInfoCard)
- **Review & Submit**: common = 8, custom = 0
- **Submission Confirmation**: common = 4, custom = 1 (Custom: FarmerSummaryCard)
## Workflow: manage_farmer.html
- **Edit Identity Profile**: common = 8, custom = 0
- **Replace Bank Account Details**: common = 7, custom = 0
- **Edit Pond Parameters**: common = 9, custom = 0
- **Add New Pond Asset**: common = 7, custom = 1 (Custom: ReviewBentoGrid)
- **Deactivate Pond Asset**: common = 6, custom = 1 (Custom: WarningSection)
## Workflow: manage_popper.html
- **Edit Identity Profile**: common = 6, custom = 2 (Custom: ProfileHeaderCard, VerificationBadges)
- **Update Business Documents**: common = 6, custom = 1 (Custom: DocumentStatusCard)
- **Edit Warehouse Details**: common = 9, custom = 1 (Custom: WarehouseEditForm)
- **Add New Warehouse Asset**: common = 7, custom = 2 (Custom: WarehouseRegistrationForm, WarehouseReviewCard)
- **Deactivate Warehouse Asset**: common = 8, custom = 2 (Custom: ActiveAllocationsCard, DeactivationReasonCard)
## Workflow: mark_lot_ready.html
- **Select Purchase Order**: common = 5, custom = 2 (Custom: POSelectionCard, POSelectionCardList)
- **Quantity Bagged**: common = 5, custom = 3 (Custom: PORecapCard, QuantityInputCard, WeightCalculationCard)
- **Confirm Bag Count**: common = 5, custom = 3 (Custom: BagWeightItem, BagWeightListCard, WeightVarianceIndicator)
- **Upload Photos (Mandatory)**: common = 8, custom = 0
- **Notify Scout & Confirm**: common = 6, custom = 2 (Custom: SuccessTerminalCard, WeightSummaryCard)
## Workflow: pond_inspection.html
- **Confirm Pond Arrival (GPS Check)**: common = 5, custom = 0
- **Assess Pond Conditions**: common = 5, custom = 2 (Custom: QuickAnalysisOverlay, RadioGroup)
- **Bund & Edge Readings**: common = 5, custom = 2 (Custom: AveragesChip, VisualizationBentoCard)
- **Pond Photos & Notes**: common = 6, custom = 1 (Custom: TechnicalMetadata)
- **Review & Submit**: common = 5, custom = 0
- **Inspection Confirmation**: common = 4, custom = 0
## Workflow: ponds_directory.html
- **Combined Ponds List**: common = 4, custom = 2 (Custom: Inspected, PondListSearchBar)
- **Pond Detail Dashboard**: common = 7, custom = 6 (Custom: InspectionLogListItem, Inspections, PondHeaderCard, PondProfileTab, Spot, SpotOfferListItem)
- **Pond Inspection Record**: common = 3, custom = 2 (Custom: BundReadingsTable, InspectionHeaderCard)
## Workflow: popper_registration.html
- **Intro & Consent**: common = 5, custom = 1 (Custom: Save)
- **Mobile Verification (OTP Send)**: common = 9, custom = 0
- **Contact Person Identity**: common = 8, custom = 0
- **Language Selection**: common = 6, custom = 0
- **Business Information**: common = 7, custom = 3 (Custom: FSSAI, FormValidation, GSTIN)
- **Business Legal Documents**: common = 8, custom = 1 (Custom: DocumentUpload)
- **Business Address**: common = 9, custom = 0
- **First Warehouse Details**: common = 8, custom = 1 (Custom: Helper)
- **First Warehouse Address**: common = 9, custom = 0
- **Warehouse Location (GPS)**: common = 9, custom = 0
- **Popping Capability Profile**: common = 10, custom = 0
- **Ancillary Equipment (Optional)**: common = 7, custom = 2 (Custom: EquipmentGrid, Skip)
- **Bank Account Details**: common = 6, custom = 0
- **Review & Submit**: common = 7, custom = 2 (Custom: SectionCard, TextLink)
- **Submission Confirmation**: common = 4, custom = 1 (Custom: TextBlock)
## Workflow: profile.html
- **Edit Personal Details**: common = 4, custom = 1 (Custom: ScoutAvatarCard)
- **Assigned Geographical Territory**: common = 1, custom = 3 (Custom: SupportContactCard, TerritoryMapCard, TerritoryVillagesCard)
- **Toggle Language Settings**: common = 4, custom = 1 (Custom: LanguageSelectionCard)
- **Database Sync Status**: common = 2, custom = 4 (Custom: ClearCacheButton, QueueMetricsCard, StorageUtilizationCard, SyncMetricsCard)
- **Logout Confirmation Details**: common = 4, custom = 2 (Custom: LogoutCTA, UnsyncedItemsCard)
## Workflow: reinspection.html
- **Prior Rejection Context**: common = 4, custom = 3 (Custom: FailureCodesList, InfoPanel, RejectionDisplay)
- **Confirm Lot Quantity**: common = 3, custom = 3 (Custom: QuantityDisplay, VarianceDisplayGrid, VarianceIndicator)
- **Parameter Readings**: common = 4, custom = 2 (Custom: FocusHighlight, GradeSummaryCard)
- **Defect Capture**: common = 6, custom = 2 (Custom: DefectBoard, DefectWarningBanner)
- **Submission Confirmation**: common = 4, custom = 3 (Custom: ConfirmationDetailsList, SequenceDisplay, VerdictChips)
## Workflow: rejection_handling.html
- **Rejection Report (Scout Detail View)**: common = 5, custom = 3 (Custom: DefectPhotosGrid, FailedParametersGrid, RejectionTriageCard)
- **Reconditioning Notice (Popper View)**: common = 4, custom = 3 (Custom: GuidelinesCard, ParameterImprovementCard, ReconditioningNoticeCard)
- **Terminal Notice (Popper View)**: common = 5, custom = 4 (Custom: ClosureReasonCard, DangerWarningBanner, SafetyHazardsList, TerminalNoticeCard)
- **Chronological Quality History (Supporting View)**: common = 5, custom = 4 (Custom: ChronologicalFlow, InspectionEventCards, StatusBadges, TimelineCard)
- **Terminal Closure Log (Admin View)**: common = 4, custom = 4 (Custom: ClosureDetailsCard, ClosureLogTable, ReadOnlyView, SearchFields)
## Workflow: seal_application.html
- **Confirm Verified Lot**: common = 5, custom = 2 (Custom: InfoCard, ValidationBanner)
- **Apply Seal & Net**: common = 3, custom = 5 (Custom: GPSAccuracyIndicator, NetSelectionCard, ScanButton, SealNumberInput, SealValidationBanner)
- **Seal Evidence Photos**: common = 6, custom = 1 (Custom: PhotoChecklistGrid)
- **Storage Check at Seal Time**: common = 9, custom = 1 (Custom: ReasonPicker)
- **Shelf-life & Confirm**: common = 8, custom = 1 (Custom: DateDisplay)
- **Submission Confirmation**: common = 7, custom = 2 (Custom: LockIcon, SealReferenceDisplay)
## Workflow: storage_recheck.html
- **Confirm Sealed Lot**: common = 4, custom = 5 (Custom: GradeDisplay, LotInfoCard, RemainingDaysDisplay, ShelfLifeCountdown, TriggerAlertDisplay)
- **Seal & Net Integrity**: common = 9, custom = 4 (Custom: FailureCodeSelector, IntegrityCheckGroup, Net, Seal)
- **Storage Conditions**: common = 10, custom = 1 (Custom: TriageGuidance)
- **Outcome & Submit**: common = 7, custom = 5 (Custom: AuditRecap, ButtonGroup, OutcomeDescription, Route, Void)
- **Submission Confirmation**: common = 6, custom = 5 (Custom: AdminAlertDisplay, CheckmarkBadge, ColorCodedPills, OutcomeDisplay, SuccessIcon)
## Workflow: submit_bid.html
- **Choose Farmer User**: common = 7, custom = 2 (Custom: FarmerCard, ValidationBadge)
- **Select Active Buyer Requirement**: common = 6, custom = 6 (Custom: BuyerDemandCard, DeliveryDateDisplay, FilterButton, MinimumMetricsDisplay, PriceRangeDisplay, RequirementCard)
- **Price Offer & Ready-By Date**: common = 5, custom = 6 (Custom: CalculatedRevenue, PriceInput, QuantityInput, RangeInput, SliderInput, SummaryDisplay)
- **Fulfillment Source Selection**: common = 7, custom = 4 (Custom: AssetCard, AvailableQuantityDisplay, LandmarkDisplay, SizeDisplay)
- **Review & Confirm Bid Submission**: common = 5, custom = 6 (Custom: AssetDisplay, FarmerDisplay, PriceDisplay, ReadyDateDisplay, RecapCard, RequirementDisplay)
- **Bid Submission Confirmation**: common = 2, custom = 1 (Custom: BidSuccessTerminalCard)
## Workflow: submit_spot_offer.html
- **Select Farmer User**: common = 4, custom = 2 (Custom: FarmerSelectionCard, FarmerSelectionCardList)
- **Select Supply Source**: common = 3, custom = 2 (Custom: SourceSelectionCard, SourceSelectionCardList)
- **Lot Details & Grade Expectations**: common = 7, custom = 3 (Custom: GradeSegmentedControl, SpotDetailsCard, Unsure)
- **Crop Quality Photos**: common = 8, custom = 0
- **Schedule Quality Verification Visit**: common = 4, custom = 3 (Custom: InspectionSlotChip, InspectionSlotSelector, ScheduleSummaryCard)
- **Review & Submit Spot Offer**: common = 6, custom = 1 (Custom: SpotSummaryCard)
## Workflow: sync_queue.html
- **Sync Queue List**: common = 3, custom = 1 (Custom: ListItem)
- **Sync Item Detail Overview**: common = 4, custom = 1 (Custom: Delete)
- **Conflict Resolution Detail**: common = 3, custom = 3 (Custom: DangerBanner, DiffViewer, Keep)
## Workflow: users_directory.html
- **Combined Users List**: common = 3, custom = 4 (Custom: FABButton, RolePicker, UserCard, UserListSearchBar)
- **Farmer Detail Profile (5 Tabs)**: common = 11, custom = 4 (Custom: FarmerHeaderCard, FarmerProfileTab, PondListTab, Ponds)
- **Popper Detail Profile (5 Tabs)**: common = 12, custom = 3 (Custom: PopperHeaderCard, PopperProfileTab, WarehouseListTab)
## Workflow: verification.html
- **Confirm Lot & Quantity**: common = 4, custom = 2 (Custom: MetadataDisplay, VarianceDisplay)
- **Parameter Readings**: common = 8, custom = 5 (Custom: Acceptable, Defective, Dull, Foreign, StickyFooter)
- **Defect Capture**: common = 5, custom = 2 (Custom: BottomSheet, SeverityIndicator)
- **Evidence Photos**: common = 4, custom = 2 (Custom: ImageTile, ProgressIndicator)
- **Reference Sample**: common = 5, custom = 2 (Custom: HelperText, ReferenceIDDisplay)
- **Disposition**: common = 5, custom = 6 (Custom: Amber, ConfirmationText, Downgrade, Hold, OutcomeBanner, Reject)
- **Grade Certificate Preview**: common = 2, custom = 4 (Custom: CertificateHeader, EvidencePhotos, PDFViewer, QualityMetricsDisplay)
- **Submission Confirmation**: common = 5, custom = 3 (Custom: ConfirmationMessage, Offline, ShortcutLink)
## Workflow: warehouse_fitness_check.html
- **Confirm Warehouse & Arrival (GPS Check)**: common = 5, custom = 6 (Custom: DistanceIndicator, GPSAccuracyDisplay, GPSSignalCard, InteractiveMap, MapComponent, WarehouseHeader)
- **Fitness Checklist**: common = 10, custom = 5 (Custom: Dampness, Dry, Elevated, Ground, Off)
- **Evidence Photos**: common = 8, custom = 2 (Custom: ProgressLoader, UploadProgress)
- **Verdict & Submit**: common = 9, custom = 2 (Custom: CriteriaDisplay, VerdictCard)
- **Submission Confirmation**: common = 6, custom = 2 (Custom: AuditCodeDisplay, CompletionMessage)
## Workflow: warehouses_directory.html
- **Warehouse List**: common = 8, custom = 6 (Custom: FilterChips, Fit, Has, Recent, SearchBar, SortSelector)
- **Warehouse Detail**: common = 9, custom = 7 (Custom: Call, DetailHeaderCard, Failures, LocationPreview, Lots, Navigate, TabBar)
- **Lot Detail**: common = 5, custom = 12 (Custom: Badge, DocumentsList, Expired, InspectionTimeline, LotDetailHeader, Pill, SealRecord, Sealed, Sold, StatusBanner, Verified, Voided)
- **Grade Certificate Viewer**: common = 5, custom = 2 (Custom: GradeCertificateDisplay, QRValidationCard)
- **Seal Record Detail**: common = 4, custom = 5 (Custom: HorizontalPhotoList, MetadataCard, Profile, SealStatusBanner, Sync)
## Workflow: profile.html
- **Screen 01: Scout Login**: common = 4, custom = 0
- **Screen 02: Scout Profile Hub**: common = 4, custom = 0
- **Screen 03: Assigned Farmers**: common = 5, custom = 0
- **Screen 04: Farmer Detail (Scout View)**: common = 4, custom = 0
- **Screen 05: Today's Tasks**: common = 5, custom = 0
- **Screen 06: Task Detail**: common = 4, custom = 1 (Custom: MapInput)
- **Screen 07: Inspection History**: common = 6, custom = 0
- **Screen 08: Sync Queue**: common = 5, custom = 0
- **Screen 09: Performance Dashboard**: common = 5, custom = 2 (Custom: All, This)
- **Screen 10: Edit Profile**: common = 3, custom = 1 (Custom: PasswordInput)
- **Screen 11: Link WhatsApp (Common Hub)**: common = 5, custom = 0
- **Screen 12: Settings (Common Hub)**: common = 5, custom = 0
- **Screen 13: Notification Preferences (Common Hub)**: common = 4, custom = 2 (Custom: Push, SMS)
- **Screen 14: Help & Support (Common Hub)**: common = 6, custom = 0
