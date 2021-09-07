declare type ScalarValue = string | number | boolean | null;
/** 18 digits record identifier */
declare type ID = string;
/** 32 hexadecimal digits record identifier (`tableId << 64 | recordId`) */
declare type DocumentID = string;

declare type FileResponse = ReadableStream;

declare type UnknownPropertyException = Error;
declare type RecordNotFoundException = Error;
declare type DotWalkingAttributeException = Error;
declare type ConditionException = Error;
declare type SavingException = Error;
declare type DeletingException = Error;
declare type AbortActionException = Error;

declare enum FlashMessageType {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
}

declare class FlashMessage {
    type: FlashMessageType;
    message: string;
}

declare class LdapConnectionResponse {
    redirectUrl: string;
    flash: FlashMessage;
}

declare class Attributes {
    [propertyName: string]: ScalarValue;
}

declare class TableDto {
    sys_id: ID;
    name: string;
}

declare const ss: SimpleSystem;
declare const sws: SimpleWS;

declare class SimpleAttachmentAttachmentService {
    setUrl(url: string): void;
    setUsername(username: string): void;
    setPassword(password: string): void;
    getAttachmentSN(serviceNowSysId: ID, simpleRecordId: ID): string | null;
    createAttachmentByUrl(url: string, simpleRecordId: ID, fileName: string): string | null;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment */
declare class SimpleAttachment {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-copy(sourceTableName,sourceID,targetTableName,targetID) */
    copy(sourceTableName: string, sourceId: ID, targetTableName: string, targetId: ID): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-deleteAttachment(attachmentID) */
    deleteAttachment(attachmentId: ID): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-getContent(sysAttachment) */
    getContent(attachmentId: ID): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-rename(attachmentId,fileName) */
    rename(attachmentId: ID, fileName: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-write(documentId,fileName,content,contentType) */
    write(documentId: DocumentID, fileName: string, content: string, contentType: string): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-writeBase64(documentId,fileName,base64,contentType) */
    writeBase64(documentId: DocumentID, fileName: string, base64: string, contentType: string): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-getAttachmentUrlById(attachmentId) */
    getAttachmentUrlById(attachmentId: ID): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-base64Encode(data) */
    base64Encode(data: string): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-base64Decode(data) */
    base64Decode(data: string, strict?: boolean): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleAttachment#SimpleAttachment-readBase64(attachmentId) */
    readBase64(attachmentId: ID): string;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleCache */
declare class SimpleCache {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleCache#SimpleCache-resetCacheSystemUrl() */
    resetCacheSystemUrl(): boolean;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime */
declare class SimpleDateTime {
    constructor(dateTime?: SimpleDateTime | string);
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-addSeconds(seconds) */
    addSeconds(seconds: number): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-addDays(days) */
    addDays(days: number): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-addWeeks(weeks) */
    addWeeks(weeks: number): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-addMonths(months) */
    addMonths(months: number): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-addYears(years) */
    addYears(years: number): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-after(dateTime) */
    after(dateTime: SimpleDateTime): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-before(dateTime) */
    before(dateTime: SimpleDateTime): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-compareTo(dateTime) */
    compareTo(dateTime: SimpleDateTime): number | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-equals(dateTime) */
    equals(dateTime: SimpleDateTime): boolean | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getValue() */
    getValue(): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getDisplayValue() */
    getDisplayValue(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getNumericValue() */
    getNumericValue(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getTime() */
    getTime(): SimpleTime;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getLocalTime() */
    getLocalTime(): SimpleTime;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getDate() */
    getDate(): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getLocalDate() */
    getLocalDate(): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getMonthLocalTime() */
    getMonthLocalTime(): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getMonthUTC() */
    getMonthUTC(): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getYearLocalTime() */
    getYearLocalTime(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getYearUTC() */
    getYearUTC(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getWeekOfYearLocalTime() */
    getWeekOfYearLocalTime(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getWeekOfYearUTC() */
    getWeekOfYearUTC(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getDayOfWeekLocalTime() */
    getDayOfWeekLocalTime(): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getDayOfWeekUTC() */
    getDayOfWeekUTC(): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getDayOfMonthLocalTime() */
    getDayOfMonthLocalTime(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getDayOfWeekUTC() */
    getDayOfMonthUTC(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getDaysInMonthLocalTime() */
    getDaysInMonthLocalTime(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getDaysInMonthUTC() */
    getDaysInMonthUTC(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-getErrorMsg() */
    getErrorMsg(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-isValid() */
    isValid(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-setValue(dateTime) */
    setValue(dateTime: string, format?: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDateTime#SimpleDateTime-subtract(first,second) */
    subtract(first: SimpleDateTime | SimpleTime | number, second?: SimpleDateTime): SimpleDuration | null;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration */
declare class SimpleDuration {
    constructor(duration: SimpleDuration | string | number | null);
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-add(duration) */
    add(duration: SimpleDuration): SimpleDuration;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-getByFormat(format) */
    getByFormat(format?: string): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-getDayPart() */
    getDayPart(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-getDisplayValue() */
    getDisplayValue(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-getDurationValue() */
    getDurationValue(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-getDurationSeconds() */
    getDurationSeconds(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-getRoundedDayPart() */
    getRoundedDayPart(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-getValue() */
    getValue(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-setDisplayValue(duration) */
    setDisplayValue(duration: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-setValue(dateTime) */
    setValue(dateTime: SimpleDateTime | string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleDuration#SimpleDuration-subtract(duration) */
    subtract(duration: SimpleDuration): SimpleDuration;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound */
declare class SimpleEmailOutbound {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-setBody(bodyText) */
    setBody(bodyText: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-addAddress(address,displayName) */
    addAddress(address: string, displayName?: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-addAddressCc(address,displayName) */
    addAddressCc(address: string, displayName?: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-addAddressBcc(address,displayName) */
    addAddressBcc(address: string, displayName?: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-getAddresses() */
    getAddresses(): string[];
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-getAddressesCc() */
    getAddressesCc(): string[];
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-getAddressesBcc() */
    getAddressesBcc(): string[];
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-setReplyTo(address) */
    setReplyTo(address: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-getReplyTo() */
    getReplyTo(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-getBody() */
    getBody(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-setSubject(subject) */
    setSubject(subject: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-getSubject() */
    getSubject(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-setFrom(address) */
    setFrom(address: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleEmailOutbound#SimpleEmailOutbound-getFrom() */
    getFrom(): string;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleImage */
declare class SimpleImage {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImage#SimpleImage-getImageUrlById(imageId) */
    getImageUrlById(imageId: ID): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImage#SimpleImage-readImageBase64(imageId) */
    readImageBase64(imageId: ID): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImage#SimpleImage-writeImageBase64(fileName,base64,contentType,imageColumnId) */
    writeImageBase64(fileName: string, base64: string, contentType: string, columnId: ID): string | null;
    /** @see  */
    getErrors(): string[];
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleImport */
declare class SimpleImport {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImport#SimpleImport-getErrorMessage() */
    getErrorMessage(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImport#SimpleImport-import(record,testMode) */
    import(record: SimpleRecord, testMode?: boolean): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImport#SimpleImport-transform(record) */
    transform(record: SimpleRecord): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImport#SimpleImport-testLdapConnection(record) */
    testLdapConnection(record: SimpleRecord): LdapConnectionResponse;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImport#SimpleImport-testLdapConnections(record) */
    testLdapConnections(record: SimpleRecord): LdapConnectionResponse;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleImport#SimpleImport-importTransform(record) */
    importTransform(record: SimpleRecord): void;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleLogArchive */
declare class SimpleLogArchive {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleLogArchive#SimpleLogArchive-runUnpacking(sysLogArchiveId) */
    runPacking(): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleLogArchive#SimpleLogArchive-runPacking() */
    runUnpacking(sysLogArchiveId: ID): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleLogArchive#SimpleLogArchive-removeUnpacked(sysLogArchiveId) */
    removeUnpacked(sysLogArchiveId: ID): void;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleMail */
declare class SimpleMail {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleMail#SimpleMail-checkConnection(current) */
    checkConnection(simpleRecord: SimpleRecord): boolean;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleMessage */
declare class SimpleMessage {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleMessage#SimpleMessage-getMessage(message,category,params,language) */
    getMessage(message: string, category?: string, params?: Attributes, languageCode?: string | null): string;
}

/** @see  */
declare class SimpleRecordDeletionLog {
    /** @see  */
    restore(sysRecordDeletionLogId: ID): boolean;
}

declare class SimpleRecordErrorStorage {
}

declare class RecordEntity {
}

declare class RemDecorator {
    __get(attribute: string): ScalarValue;
    __set(attribute: string, value: ScalarValue): void;
    getValue(attribute: string): ScalarValue;
    setValue(attribute: string, value: ScalarValue): void;
    getTitle(attribute: string): string
    getDisplayValue(attribute: string): string;
    getReModelId(): string | null;
}

declare class EntityDecorator {
    /** @throws UnknownPropertyException */
    getDisplayValue(propertyName?: string): string;
    /** @throws UnknownPropertyException */
    getLabel(propertyName: string): string;
    /** @throws UnknownPropertyException */
    __get(propertyName: string): EntityDecorator | ScalarValue;
    /** @throws UnknownPropertyException */
    __set(propertyName: string, value: ScalarValue): void;
    getEntity(): RecordEntity;
    getAttributes(): Attributes;
    setErrorStorage(errorStorage?: SimpleRecordErrorStorage): void;
    isFullEntity(): boolean;
    initialize(exceptPropertyNames: string[]): void;
    setRemDecorator(remDecorator: RemDecorator): void;
    getRemDecorator(): RemDecorator | null;
    prepareContext(propertyName: string): string;
    reloadContext(): void;
    addError(message: string, params: object): void;
    hasAttachment(): boolean;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side */
declare class SimpleRecord {
    sys_id: ID;
    rem_attr: RemDecorator;
    /**
     * @throws RecordNotFoundException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-SimpleRecord(tableName)
     */
    constructor(tableName: string);
    /**
     * @throws DotWalkingAttributeException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-addQuery(property,operator,value)
     */
    addQuery(propertyName: string, operatorOrValue: ScalarValue | ScalarValue[], value?: ScalarValue | ScalarValue[]): this;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-selectAttributes(attributes) */
    selectAttributes(propertyNames: string[] | string): this;
    /**
     * @throws DotWalkingAttributeException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-addOrCondition(property,operator,value)
     */
    addOrCondition(propertyName: string, operatorOrValue: ScalarValue, value?: ScalarValue): this;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-addEncodedQuery(condition) */
    addEncodedQuery(condition: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-orderBy(column) */
    orderBy(propertyName: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-orderByDesc(column) */
    orderByDesc(propertyName: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-setLimit(maxNumRecords) */
    setLimit(limit: number): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getConditionQuery() */
    getConditionQuery(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-get(propertyOrValue,value) */
    get(propertyNameOrValue: ID | string, value?: ScalarValue): SimpleRecord;
    /**
     * @throws ConditionException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-query()
     */
    query(): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-canCreate() */
    canCreate(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-canRead() */
    canRead(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-canUpdate() */
    canUpdate(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-canDelete() */
    canDelete(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-next() */
    next(): EntityDecorator | false;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getRowCount() */
    getRowCount(): number;
    /** @see  */
    __get(propertyName: string): EntityDecorator | ScalarValue;
    /** @see  */
    __set(propertyName: string, value: ScalarValue): void;
    /**
     * @throws UnknownPropertyException
     * @throws Error
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getValue(property)
     */
    getValue(propertyName: string): ScalarValue;
    /**
     * @throws Error
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-setValue(property,value)
     */
    setValue(propertyName: string, value: ScalarValue): void;
    /**
     * @throws UnknownPropertyException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getDisplayValue(property)
     */
    getDisplayValue(propertyName?: string): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-setMultipleValue(property,value) */
    setMultipleValue(propertyName: string, value: ScalarValue): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getAttributes() */
    getAttributes(): Attributes;
    /**
     * @throws SavingException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-update()
     */
    update(): string;
    /**
     * @throws SavingException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-insert()
     */
    insert(): string;
    /**
     * @throws DeletingException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-deleteRecord()
     */
    deleteRecord(id?: ID): boolean;
    /**
     * @throws DeletingException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-deleteMultiple()
     */
    deleteMultiple(): boolean;
    /**
     * @throws SavingException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-updateMultiple()
     */
    updateMultiple(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getTableName() */
    getTableName(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getErrors() */
    getErrors(): string[];
    /**
     * @throws AbortActionException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-setAbortAction(flag)
     */
    setAbortAction(flag: boolean, message?: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-hasAttachment() */
    hasAttachment(): boolean;
    /**
     * @throws RecordNotFoundException
     * @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getClassDisplayValue()
     */
    getClassDisplayValue(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-getLabel(property) */
    getLabel(propertyName: string): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-matchesCondition(condition) */
    matchesCondition(condition: string): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-silentMode(enable) */
    silentMode(enable?: boolean): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-isTableVcsEnabled() */
    isTableVcsEnabled(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRecord+Server-Side#SimpleRecordServerSide-initialize() */
    initialize(): void;
    /** @see  */
    getReModelId(): ID | null;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest */
declare class SimpleRestRequest {
    /** @see  */
    init(requestName: string, methodName: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-execute() */
    execute(): SimpleRestResponse;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-setBasicAuth(userName,userPassword) */
    setBasicAuth(username: string, password: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-setRequestUrl(requestUrl) */
    setRequestUrl(requestUrl: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-setRequestMethod(methodName) */
    setRequestMethod(methodName: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-setRequestTimeout(timeout) */
    setRequestTimeout(timeout: number): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-setQueryParameter(name,value) */
    setQueryParameter(name: string, value: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-setRequestBody(body) */
    setRequestBody(body: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-setStringParameter(name,value) */
    setStringParameter(name: string, value: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-setRequestHeader(name,value) */
    setRequestHeader(name: string, value: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-getRequestUrl() */
    getRequestUrl(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-getRequestBody() */
    getRequestBody(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-getRequestHeaders() */
    getRequestHeaders(): Attributes;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestRequest#SimpleRestRequest-getRequestMethod() */
    getRequestMethod(): string;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleRestResponse */
declare class SimpleRestResponse {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestResponse#SimpleRestResponse-getBody() */
    getBody(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestResponse#SimpleRestResponse-getAllHeaders() */
    getAllHeaders(): Attributes;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestResponse#SimpleRestResponse-getStatusCode() */
    getStatusCode(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleRestResponse#SimpleRestResponse-haveError() */
    haveError(): boolean;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule */
declare class SimpleSchedule {
    constructor(sysId: ID, timeZone?: string);
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-duration(startDateTime,endDateTime) */
    duration(startDate: SimpleDateTime, $endDate: SimpleDateTime): SimpleDuration;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-load(sysId,timezoneTitle) */
    load(sysId: ID, timeZone?: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-isWorkingTime(datetime) */
    workingTime(): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-getName() */
    getName(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-isValid() */
    isValid(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-isInSchedule(datetime) */
    isInSchedule(time: SimpleDateTime): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-isWorkingTime(datetime) */
    isWorkingTime(time: SimpleDateTime): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-setTimeZone(timezoneTitle) */
    setTimeZone(timezone: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-whenWillExpire(startDateTime,finalWorkingSeconds) */
    whenWillExpire(startDate: SimpleDateTime, finalWorkingSeconds: number): SimpleDateTime | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSchedule#SimpleSchedule-whenNext(datetime,timezoneTitle) */
    whenNext(time: SimpleDateTime): SimpleDuration | null;
}

/** @see  */
declare class SimpleSearch {
    /** @see  */
    search(text: string, tableIds: ID[], page?: number, limit?: number): SimpleRecord[];
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleSession */
declare class SimpleSession {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSession#SimpleSession-getClientIP() */
    getClientIP(): string | null;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem */
declare class SimpleSystem {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.debug(message) */
    debug(message: any): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.info(message) */
    info(message: any): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.warning(message) */
    warning(message: any): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.error(message) */
    error(message: any): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.setProperty(name,value,description) */
    setProperty(name: string, value: string, description?: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.getProperty(name) */
    getProperty(name: string): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.addInfoMessage(message,params) */
    addInfoMessage(message: string, params?: object): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.addSuccessMessage(message,params) */
    addSuccessMessage(message: string, params?: object): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.addErrorMessage(message,params) */
    addErrorMessage(message: string, params?: object): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.getUserID() */
    getUserID(): ID;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.eventQueue(name,current,param_1,param_2,param_3,param_4,param_5) */
    eventQueue(
        name: string,
        instance?: SimpleRecord,
        param1?: string,
        param2?: string,
        param3?: string,
        param4?: string,
        param5?: string
    ): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.eventQueueScheduled(name,current,process_started_at,param_1,param_2,param_3,param_4,param_5) */
    eventQueueScheduled(
        name: string,
        instance?: SimpleRecord,
        startTime?: SimpleDateTime,
        param1?: string,
        param2?: string,
        param3?: string,
        param4?: string,
        param5?: string
    ): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.generateUrlAction(assigned_to,script,expire_at) */
    generateUrlAction(userId: ID, script: string, expire: string): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.setRedirect(url) */
    setRedirect(url?: string, newTab?: boolean): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.hasRole(role) */
    hasRole(role: string): boolean;
    /** @see  */
    isVcsEnabled(tableName: string): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.getTableIdByDocId(DocID) */
    getTableIdByDocId(docId: DocumentID): ID;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.getRecordIdByDocId(DocID) */
    getRecordIdByDocId(docId: DocumentID): ID;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.getDocIdByIds(tableID,RecordID) */
    getDocIdByIds(tableId: ID, recordId: ID): DocumentID;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.getUser() */
    getUser(): SimpleRecord;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.getApplicationId() */
    getApplicationId(): ID;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.importIncludeScript(name) */
    importIncludeScript(name: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleSystem#SimpleSystem-ss.generateResetToken() */
    generateResetToken(): string;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleTable */
declare class SimpleTable {
    constructor(tableName: string);
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTable#SimpleTable-getParentTables() */
    getParentTables(): TableDto[];
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTable#SimpleTable-getChildTables() */
    getChildTables(): TableDto[];
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplate */
declare class SimpleTemplate {
    constructor(template: string);
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplate#SimpleTemplate-get(templateName) */
    get(recordTemplateName: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplate#SimpleTemplate-applyTo(SimpleRecord) */
    applyTo(simpleRecord: SimpleRecord): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplate#SimpleTemplate-applyToByTemplateField(SimpleRecord,template) */
    applyToByTemplateField(simpleRecord: SimpleRecord, template: Attributes | string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplate#SimpleTemplate-createBySimpleRecord(SimpleRecord,templateName) */
    createBySimpleRecord(simpleRecord: SimpleRecord, templateName: string, templateTableName?: string): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplate#SimpleTemplate-createByTemplateData(templateData,tableName,templateName,templateTableName) */
    createByTemplateData(
        templateData: Attributes | string,
        tableName: string,
        templateName: string,
        templateTableName?: string
    ): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplate#SimpleTemplate-createByTemplateField(template,tableName,templateName) */
    createByTemplateField(
        template: Attributes | string,
        tableName: string,
        templateName: string,
        templateTableName?: string
    ): string;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplatePrinter */
declare class SimpleTemplatePrinter {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplatePrinter#SimpleTemplatePrinter-print(string) */
    print(string: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplatePrinter#SimpleTemplatePrinter-getPrint() */
    getPrint(): string[];
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplatePrinter#SimpleTemplatePrinter-space(spaces) */
    space(spaces: number): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTemplatePrinter#SimpleTemplatePrinter-getSpace() */
    getSpace(): string;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleTime */
declare class SimpleTime {
    constructor(seconds?: number);
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTime#SimpleTime-getByFormat(format) */
    getByFormat(format?: string): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTime#SimpleTime-getValue() */
    getValue(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTime#SimpleTime-getDisplayValue() */
    getDisplayValue(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTime#SimpleTime-getHourLocalTime() */
    getHourLocalTime(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTime#SimpleTime-getHourUTC() */
    getHourUTC(): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleTime#SimpleTime-setValue(time) */
    setValue(time?: string): void;
    /** @see  */
    subtract(time1: SimpleTime, time2: SimpleTime): SimpleDuration;
    /** @see  */
    format(format: string, timezoneType?: string): string;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleUserCriteria */
declare class SimpleUserCriteria {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleUserCriteria#SimpleUserCriteria-userAcceptanceByCriteria(user,criteria) */
    serAcceptanceByCriteria(userId: ID, $criteriaIds: ID[]): boolean;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleUser+Server-Side */
declare class SimpleUser {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleUser+Server-Side#SimpleUserServerSide-hasRole(role) */
    hasRole(role: string): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleUser+Server-Side#SimpleUserServerSide-getContext() */
    getContext(): SimpleRecord;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleUser+Server-Side#SimpleUserServerSide-getID() */
    getID(): ID;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleUser+Server-Side#SimpleUserServerSide-getPreference(preferenceName) */
    getPreference(preferenceName: string): string | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleUser+Server-Side#SimpleUserServerSide-setPreference(preferenceName,value) */
    setPreference(preferenceName: string, value: string): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleUser+Server-Side#SimpleUserServerSide-getAccessToken() */
    getAccessToken(): string;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs */
declare class SimpleVcs {
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-isLocalPackHasReferences(localPackId) */
    isLocalPackHasReferences(localPackId: ID): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-isRetrievedPackHasReferences(retrievedPackId) */
    isRetrievedPackHasReferences(retrievedPackId: ID): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-loadDataFromAttachment(sysVcsRetrievedPackId) */
    loadDataFromAttachment(sysVcsRetrievedPackId: ID): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-preview(sysVcsRetrievedPackId) */
    preview(sysVcsRetrievedPackId: ID): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-importRetrievedPack(retrievedPackId) */
    importRetrievedPack(sysVcsRetrievedPackId: ID): boolean;
    /** @see  */
    applyRetrievedPack(sysVcsRetrievedPackId: ID): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-exportLocalPackVcsRecords(sysVcsLocalPackId) */
    exportLocalPackVcsRecords(sysVcsLocalPackId: ID): FileResponse;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-mergeLocalPacks(rowIds,name,description) */
    mergeLocalPacks(rowIds: ID[], name?: string, description?: string): string;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-createTableSnapshot(tableName) */
    createTableSnapshot(tableName: string): number;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-rollBackPreview(packId) */
    rollBackPreview(packId: ID): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-rollback(packId) */
    rollBack(packId: ID): void;
    /** @see  */
    restore(versionId: ID): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleVcs#SimpleVcs-moveVcsRecordsToDefault(versionIds) */
    moveVcsRecordsToDefault(versionIds: ID[]): boolean;
}

declare class SimpleWS {
    restRequestV1(messageName?: string, methodName?: string): SimpleRestRequest;
}

/** @see https://docs.simpleone.ru/display/SAPI/SimpleWorkflow */
declare class SimpleWorkflow {
    constructor(workflowId?: number);
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleWorkflow#SimpleWorkflow-start(current) */
    start(current: SimpleRecord): SimpleRecord;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleWorkflow#SimpleWorkflow-copy() */
    copy(): SimpleRecord | null;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleWorkflow#SimpleWorkflow-delete() */
    delete(): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleWorkflow#SimpleWorkflow-cancel(current) */
    cancel(current: SimpleRecord): void;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleWorkflow#SimpleWorkflow-hasActiveContexts(current) */
    hasActiveContexts(current: SimpleRecord): boolean;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleWorkflow#SimpleWorkflow-revival(executingActivity,current) */
    revival(executingActivity: SimpleRecord, current: SimpleRecord): SimpleRecord;
    /** @see https://docs.simpleone.ru/display/SAPI/SimpleWorkflow#SimpleWorkflow-startSubflow(executingActivity,current,workflowId) */
    startSubflow(executingActivity: SimpleRecord, current: SimpleRecord, workflowId: ID): SimpleRecord | null;
}
